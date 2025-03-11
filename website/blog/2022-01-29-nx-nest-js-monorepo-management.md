---
slug: nx-nestjs-monorepo-management
title: Nx ve NestJs Kullanarak Monorepo Yönetimi
author: Isik
author_title: Backend Team Lead @ vivoo
author_url: https://isikhuseyin.com/
author_image_url: https://gitlab.com/uploads/-/system/user/avatar/4595338/avatar.png?width=400
tags: [nx, nestjs, monorepo, microservice, architecture]
image: https://ibb.co/BBPTG4J
---


Nx monorepo yönetim aracı, Nest.js Nodejs frameworkü
Nx, Node.js tabanlı front end ve backend uygulamalarını ve pluginleriyle beraber diğer ortamları da destekleyebilen(örneğin nx-go ile golang) bir monorepo yönetim aracıdır.

Öncelikle monorepodan bahsedelim, monorepo nedir?
Monorepo isminden de anlaşıldığı gibi projenin tüm kaynak kodları ve assetlerinin tek bir repoda toplandığı bir proje repository yönetim stratejisidir. En bilindik şirketlerden olan Google, bu yaklaşımı benimseyerek milyarlarca satır kodu tek bir repoda tutuyor. Detaylar için: https://dl.acm.org/doi/fullHtml/10.1145/2854146

Monolith bir uygulama tek bir repoda da yönetilebilir, birden fazla repoya da bölünebilir. Benzer şekilde microservislerden oluşan çoklu uygulamalar tek repoda yani bu yazımızda geçen monorepo olarak da yönetilebilir kendi multi repolarına da bölümlenebilir.

Biz vivoo'da farklı bölümler/projeler için farklı stratejiler izlesek de birazdan bahsedeceğim backend/api için monorepo yönetim aracı olan nx'i kullanarak microservisleri yönetiyoruz.

Monorepo kullanarak sağladığımız belirgin avantajlar şu şekilde:
1- Backend servisleri — projeleri arasındaki kullanılan ortak kütüphaneler, bağımlılıklar ve veri tiplerini kolayca birbirine paylaştırabiliyoruz.

2- Tek bir altyapı yapılandırmasını tüm servislerde kullanabiliyoruz. Aslında bu konu monorepoların derleme sürelerinde bir dezavantaj gibi gözükse de nx, docker ve bir kaç bash script sayesinde bu dezavantaj oldukça azalıyor. Sadece affected projeleri paketleyip yayınlayabiliyoruz.

3- Kullanılan dependencyler tüm projelerde en güncel haliyle kalıyor. Bir tanesini güncellediğimizde hepsi güncelleniyor.

Monorepoya geçerken dikkat edilmesi gereken önemli bir şey testlerin yazılıyor olması. Örneğin x librarysini kullanan 20 tane uygulama/proje/servis varsa ve bir kişi gidip x librarysini güncellediğinde o kütüphane ya da uygulamaların bazılarında testler doğru yazılmadıysa ortak kullanılan yerdeki bir değişiklik bir çok serviste yayın sırasında hataya sebep olabilir. O yüzden dikkatli olunması gerekiyor.

Neden NX tercih ettik?
An itibariyle(2021) açık kaynak kodlu javascript teknolojileri üzerinde yönetim aracı olarak kullanabilecek 2 opsiyon var. Bu opsiyonlar altında yarn kullanıldığı için yarn workspace'i dahil etmedim.

1- Nx

2- Lerna

Lerna oldukça güçlü bir araç olsa da bizim her servisi ayrıca paket olarak tasarlamaya ve bunları yayınlamaya değil de şirket içerisinde uygulama geliştirmeyi daha efektif hale getirmeye ihtiyacımız vardı. Google'ın yaklaşımlarını benimseyerek geliştirilen Nx, Lerna'dan farklı olarak tüm proje için tek bir package.json sağlıyor. Lerna'da her projenin kendi package.json'ı varken nx'de tüm dependencyler tek bir yerden yönetiliyor. Nx'de istenirse yarn workspace kullanarak bunu çoklu paket sistemine çevirmek mümkün olsa da pratik olarak önerilmiyor. Google'ın yaklaşımı burada baz alınmış. https://github.com/nrwl/nx/issues/1777 bu issue'dan ilgili yazışmaları okuyabilirsiniz. Lerna'dan Nx' geçmek ile alakalı kurucularından bir Victor Savkin'in yazdığı bir blog var detayları buradan okuyabilirsiniz. https://blog.nrwl.io/why-you-should-switch-from-lerna-to-nx-463bcaf6821

Nx'in öne çıkan özelliklerine biraz daha bakalım:

Dependency Graph: Nx ile proje grafiğindeki düğümler workspace.json içinde tanımlanıyor. Düğümler arasındaki bağımlılıkları nx kendi başına halletse de manuel olarak tanımlayabiliyoruz. Ayrıca önceden tanımlanmış grafiği önbelleğe alıp yalnızca değiştirdiğiniz dosyaları yeniden analiz ediyor.
Affected Commands: Nx ile ilgili projeyi, çoklu projeleri ve tüm projeleri çalıştırmak dışında yalnızca değişen ve bu değişikliklere bağlı olan uygulamaları test etme, build etme imkanımız var. İlgili merge/pull request ile target ve base commit arasındaki farka bakıp sadece etkilenen projeleri çalıştırabiliyoruz.
Computation Hashing and Caching: Nx ilgili bir görevi çalıştırken task sırasını kontrol eder ve çalıştırdığı her görevi hashler. Eğer ilgili görev daha önce çalıştırıldıysa yani hash cache'de mevcutsa ilgili işin çıktılarını hızlı bir şekilde yerine getirir. Bunu yaparken local ya da cloud kullanılabilir.
Distributed Task Execution: Nx'in komutlarını NX Cloud kullanarak farklı makinelerde aynı anda çalıştırabilirsiniz.
Nx Generators: Nx generatorler ile projemizde kullanılan ve tekrar eden bir çok görevi ve yapıları özelleştirerek otomatikleştirebiliyoruz. Örneğin sürekli kullandığımız bir dosya yapısı varsa onu oluşturmasını sağlayan bir generator yazabiliriz.
Öyleyse hadi Nx'i sistemimize kurup nest js ile bir uygulama ayağa kaldıralım. İkinci bölümde ise bu uygulamaya yeni bir uygulama ekleyip build, test ve deploy süreçlerine bakalım.

​​npm install -g nx

npx create-nx-workspace — preset=nest

Nx cli

![nx workspace](https://ibb.co/tQKQWVw)

Vs code ile ilgili projeyi açıp structere'a bakalım:

![project_structure_architecture](https://ibb.co/Jz9cW4j)

Nx-NestJs CLI ile oluşturulmuş uygulama dosya dizini
Nx ve Nest CLI sayesinde https://nx.dev/l/n/nest/overview buradaki dökümanda bulabileceğiniz yardımcı commandler işleri oldukça hızlandırıyor.(not: yarn add -D @nrwl/nest ile nesti eklemeyi unutmayalım)

Bir sonraki bölümde Nx kullanarak birden çok uygulamanın test, build ve deploy süreçlerini anlatıp bir kaç örnek yapacağız.

Yazıda ve projede emeği geçen kişiler:

Huseyin Isik

Semih Onay


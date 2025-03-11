---
slug: localization-and-internalization-turkish
title: Uluslararası Projelerde Yerelleştirme Stratejileri
author: Isik
author_title: Backend Team Lead @ vivoo
author_url: https://isikhuseyin.com/
author_image_url: https://gitlab.com/uploads/-/system/user/avatar/4595338/avatar.png?width=400
tags: [software engineering, localisation, language, internalization, lokalise]
---

## **Uluslararası Projelerde Yerelleştirme Stratejileri**

#### **Giriş**
Günümüzde yazılım projeleri, yerel bir pazarla sınırlı kalmaktan çıkmış ve küresel bir kitleye hitap etme gerekliliği doğmuştur. Ancak, bu küresel açılım, yazılımın farklı kültürler ve diller arasında doğru bir köprü kurmasını gerektirir. Başarılı bir yerelleştirme (localization - L10n) stratejisi olmadan, ürünün kullanıcı deneyimi ciddi şekilde olumsuz etkilenebilir. Bu yazıda, uluslararası projelerde yerelleştirme stratejilerini nasıl derinlemesine uygulayabileceğinizi ele alacağız.
Burada anlatılacak stratejiler hem bir localization için bir saas destek alıyorsanız, hem de kendiniz yazıyorsanız dikkate almanız gereken genel konuları teknik örneklerle kapsayacak şekilde yazılmaya çalışılmıştır. 

![internalization-caption-pic](/img/internalization.jpeg)

#### **Yerelleştirme (L10n) ve Uluslararasılaştırma (Internationalization - i18n)**
Yerelleştirme, bir ürünün belirli bir yerel pazara uyarlanması sürecini ifade ederken, uluslararasılaştırma, ürünün küresel ölçekte, farklı diller ve kültürel normlara uyumlu hale getirilmesi için yapılan hazırlıkları kapsar.

- **Uluslararasılaştırma (i18n):** Geliştirme sürecinde, yazılımın çeşitli dil ve kültürel gereksinimlere esnek bir şekilde uyum sağlayabilmesi için altyapı ve tasarım kararlarının alınmasını içerir. Örneğin:
  - **Metin ve Kaynak Ayırımı:** Kod içerisine gömülü metinler yerine, dış kaynak dosyaları (resource files) kullanılarak, dil bağımsız bir yapı oluşturulur. Bu, çeviri süreçlerini kolaylaştırır ve sürüm kontrolü sağlar.
  - **UI Tasarımında Esneklik:** Farklı dillerdeki metinlerin uzunluk farkları, sağdan sola yazılan diller (Right-to-Left - RTL languages) veya çok baytlı karakter setlerinin (multi-byte character sets) desteklenmesi gibi unsurlar göz önünde bulundurulmalıdır.
  - **Kültürel Farklılıkların Dikkate Alınması:** Tarih, saat, sayı formatları gibi kültürel farklılıklar, kodlamada parametrik olarak ele alınmalı ve gerektiğinde yerel ayarlarla (locale) uyumlu hale getirilmelidir.

- **Yerelleştirme (L10n):** Yazılımın spesifik bir pazarın kültürel, dilsel ve yasal gereksinimlerine göre uyarlanması sürecidir. Bu süreç, çeviriden daha fazlasını içerir:
  - **Dil Çevirileri:** Tercümelerin yalnızca doğru değil, aynı zamanda bağlama uygun ve kültürel olarak hassas olması gerekir.
  - **Para Birimi, Tarih ve Saat Formatları:** Yerel para birimi, tarih ve saat formatı gibi detaylar, kullanıcıların günlük yaşamlarındaki alışkanlıklarına uygun hale getirilmelidir.
  - **Kültürel Referanslar:** Ürün içerisindeki metinler, simgeler ve görsellerin, hedef kitlede olumsuz bir etki yaratmaması için kültürel uyumları gözden geçirilmelidir.

#### **Yerelleştirme Stratejileri**
Yerelleştirme süreci, stratejik planlama ve teknik uygulamaların yanı sıra, kültürel duyarlılık gerektirir. İşte etkili yerelleştirme stratejileri:

- **Çeviri Yönetim Sistemleri (Translation Management Systems - TMS):** TMS, yazılım geliştiriciler ve çevirmenler arasındaki işbirliğini optimize eden, dil dosyalarının merkezi bir sistemde yönetilmesini ve sürüm kontrolü yapılmasını sağlayan araçlardır. İyi bir TMS, çevirilerin sürekli entegrasyon ve dağıtım (CI/CD) süreçlerine entegre edilmesine olanak tanır, bu da sürümlerin tutarlılığını ve kalite kontrolünü sağlar.
  
- **Kültürel Uyum:** Kültürel uyum, yalnızca dil çevirisiyle sınırlı kalmaz. Farklı kültürlerin değerlerine, normlarına ve sembollerine saygı göstermek gerekir. Örneğin:
  - **Renk ve Görsel Seçimi:** Renklerin anlamları kültürler arasında farklılık gösterebilir. Örneğin, bazı renkler bir kültürde olumlu bir anlam taşırken, başka bir kültürde olumsuz algılanabilir.
  - **Semboller ve İmgeler:** Sembollerin ve imgelerin yerel kültürlerde nasıl algılandığını anlamak önemlidir. Yanlış bir sembol seçimi, kullanıcılar arasında yanlış anlaşılmalara neden olabilir.

- **Yerelleştirme Testleri ve Geri Bildirim:** Yerelleştirilmiş yazılımların, hedef pazarda gerçek kullanıcılarla kapsamlı test edilmesi esastır. Bu testler, dilsel ve kültürel uyumluluk açısından hataların tespit edilmesini sağlar. Geri bildirim döngüleri, bu sürecin kritik bir parçasıdır ve sürekli iyileştirmeyi destekler.

#### **Yerelleştirme Test Süreçleri**
Yerelleştirme test süreçleri, yazılımın farklı dil ve kültürlere uygunluğunu sağlamak için kritik bir adımdır. Bu süreçte dikkat edilmesi gereken noktalar şunlardır:

1. **Testlerin Yapılandırılması:** Yerelleştirme testleri, hem fonksiyonel hem de dilsel (linguistic) testleri içermelidir. Fonksiyonel testler, yazılımın farklı dillerde doğru çalışıp çalışmadığını doğrularken, dilsel testler metinlerin doğru çevrilip çevrilmediğini ve kültürel uyumluluğunu değerlendirir.

2. **Kullanılacak Araçlar:** Yerelleştirme testlerinde kullanılabilecek araçlar arasında Selenium, BrowserStack, Appium gibi otomasyon araçları ve çeviri doğrulama için lokalizasyon test araçları (örneğin, LingoHub, Crowdin) bulunmaktadır. Bu araçlar, test süreçlerini hızlandırır ve hataların tespit edilmesini kolaylaştırır.

3. **Test Metrikleri:** Yerelleştirme testlerinin başarısını değerlendirmek için birkaç temel metrik kullanılır:
   - **Çeviri Tutarlılığı:** Farklı sayfalarda veya modüllerde kullanılan terimlerin tutarlılığı.
   - **Kullanıcı Deneyimi (UX) Uygunluğu:** Yerelleştirilmiş UI elementlerinin kullanıcı deneyimini olumsuz etkileyip etkilemediği.
   - **Hata Oranı:** Çeviriden veya UI uyumsuzluklarından kaynaklanan hata sayısı.

#### **Derinlemesine Teknik Detaylar: Yerelleştirme Sürecinin Temel Aşamaları**
1. **Metinlerin Ayıklanması ve Çeviri:** Tüm metinler koddan ayrılarak dış kaynak dosyalarına taşınır. Bu, sadece çeviri sürecini kolaylaştırmakla kalmaz, aynı zamanda metinlerin kod ile bağımsız olarak yönetilmesine olanak tanır. JSON, XML veya PO dosyaları gibi formatlar, yerelleştirme sürecinde yaygın olarak kullanılır.

2. **Çok Dilli Destek İçin API Tasarımı:** Çok dilli destek sunan API'ler, içeriklerin locale tabanlı olarak döndürülmesini sağlayacak şekilde tasarlanmalıdır(aşağıda biraz daha detaylı anlatacağım.) Örneğin:
   - **RESTful API:** İstemciden gelen taleplerde locale bilgisi header üzerinden iletilir ve sunucu, ilgili dildeki içeriği döndürür.
   - **GraphQL API:** Dil seçimine dayalı olarak dinamik veri getirir. Sorgular, içeriklerin hangi dilde döndürülmesi gerektiğini belirlemek için parametrik olarak yapılandırılır.

3. **UI ve UX Optimizasyonu:** UI tasarımlarının, sağdan sola yazılan diller, farklı metin uzunlukları ve yerel semboller gibi değişkenlere uyum sağlayabilmesi için esnek olması gerekir. Bu esneklik, responsive tasarım ve adaptif layout'lar (adaptive layouts) ile sağlanabilir. UX testleri ise, kullanıcıların yerelleştirilmiş versiyonlarla nasıl etkileşime geçtiğini analiz eder.

4. **Yasal ve Regülasyonel Uyumluluk:** Farklı ülkelerdeki veri gizliliği yasaları (örneğin, GDPR) ve sektörel düzenlemeler göz önünde bulundurulmalıdır. Bu, veri depolama ve işleme politikalarının yerel yasalara uygun hale getirilmesini gerektirir. Özellikle sağlık, finans ve eğitim gibi sektörlerde, yerelleştirme sürecinde bu gereksinimlerin karşılanması zorunludur.

5. **Veritabanı ve Altyapı Desteği:** Farklı karakter setlerini ve çok dilliliği desteklemek için, veritabanı yapılandırmalarının (örneğin, UTF-8 veya UTF-16 gibi karakter setlerinin kullanımı) uygun şekilde yapılandırılması gerekir. Ayrıca, dağıtık sistemlerde performans ve ölçeklenebilirlik göz önünde bulundurulmalıdır.

#### **Client Tarafında Çok Dilli Destek**

1. **Dil Seçimi ve Yönetimi:**
   - **Kullanıcı Arayüzü (UI) Dil Ayarları:** İstemci uygulaması, kullanıcıya tercih ettikleri dili seçme imkanı tanımalıdır. Bu seçim, uygulama başlatıldığında bir dil seçme ekranı (language selector) ya da kullanıcı ayarları menüsü aracılığıyla sağlanabilir. Bu dil seçimi, bir "locale" değeri olarak kaydedilir ve bu değere dayalı olarak API'ye talepler yapılır.
   - **Yerel Saklama (Local Storage):** Seçilen dil genellikle istemci tarafında saklanır (örneğin, browser local storage, cookies veya mobile app preferences). Bu sayede, kullanıcı uygulamaya her giriş yaptığında tercih ettiği dil otomatik olarak yüklenir.
   - **Otomatik Dil Algılama:** İstemci uygulaması, kullanıcının tarayıcı veya cihaz ayarlarından dil tercihlerini otomatik olarak algılayabilir. Bu, özellikle ilk kullanımda kullanıcı deneyimini iyileştirir. Örneğin, `navigator.language` (JavaScript) veya `NSLocale.current.languageCode` (Swift) gibi API'ler kullanılarak, varsayılan dil belirlenebilir.
   - `en-EN`, `en-US`, `fr-FR` gibi terimler **"locale"** (yerel ayar) olarak adlandırılır ve dilin yanı sıra, belirli bir bölge veya ülkeye özgü kültürel, tarihsel, ve dilsel farklılıkları da ifade eder. Locale, genellikle iki parçadan oluşur:

   1. **Dil Kodu**: Bu, dilin kendisini belirtir. Örneğin:
      - `en` → İngilizce (English)
      - `fr` → Fransızca (Français)
      - `de` → Almanca (Deutsch)

   2. **Ülke veya Bölge Kodu**: Bu, dilin hangi ülke veya bölgedeki varyasyonunu ifade ettiğini belirtir. Bu kodlar, ISO 3166-1 alpha-2 standardına göre iki harfli ülke kodlarıdır. Örneğin:
      - `US` → Amerika Birleşik Devletleri (United States)
      - `GB` → Birleşik Krallık (United Kingdom)
      - `FR` → Fransa (France)

    Bu nedenle, `en-EN` ve `en-US` gibi locale'lar şunları ifade eder:

   - **`en-EN`**: (Bu aslında doğru bir locale değil; doğru hali `en-GB` olurdu) Birleşik Krallık İngilizcesi. Bu, İngiltere'de kullanılan İngilizce diline özgü dil bilgisi, yazım ve sözdizimi kurallarını belirtir.
   - **`en-US`**: Amerikan İngilizcesi. Amerika Birleşik Devletleri'nde kullanılan İngilizce diline özgü kuralları ifade eder.

    **Neden Sadece `en` Değil de `en-US` veya `en-GB` Kullanılıyor?**

    Sadece `en` kullanmak dilin genel bir versiyonunu ifade ederken, `en-US` veya `en-GB` gibi spesifik locale'lar, belirli bir bölgeye özgü dil varyasyonlarını dikkate alır. Bunun önemi şuradan gelir:

   1. **Yazım Farklılıkları**:
      - `en-GB`: "Colour", "favour", "centre" gibi kelimeler kullanılır.
      - `en-US`: "Color", "favor", "center" gibi yazımlar tercih edilir.

   2. **Tarih ve Saat Formatları**:
      - `en-GB`: Tarih formatı genellikle `dd/mm/yyyy` şeklindedir.
      - `en-US`: Tarih formatı `mm/dd/yyyy` şeklinde kullanılır.

   3. **Para Birimi ve Diğer Kültürel Farklılıklar**:
      - `en-GB`: Para birimi olarak `GBP (£)` kullanılır.
      - `en-US`: Para birimi olarak `USD ($)` kullanılır.

2. **API Taleplerinin Yapılandırılması:**
   - **Locale Bilgisinin Header'da Gönderilmesi:** API talepleri yapılırken, istemci uygulaması, seçilen dil bilgilerini "Accept-Language" header'ı üzerinden sunucuya iletir. Örneğin, bir HTTP talebinde:
     ```http
     GET /products
     Host: api.example.com
     Accept-Language: en-US
     ```
   - **Parametrik Talepler:** Bazı durumlarda dil bilgisi query parametresi olarak da iletilebilir. Örneğin:
     ```http
     GET /products?locale=fr-FR
     ```
   - **Dil ve Yerel Ayar Yönetimi:** İstemci uygulaması, dilin yanı sıra tarih, saat ve sayı formatları gibi yerel ayar bilgilerini de API taleplerine dahil edebilir. Bu bilgiler, özellikle içeriklerin yerel kullanıcılara uygun bir şekilde sunulması için önemlidir.


#### **Server Tarafında Çok Dilli Destek**

- Bir çok yazılım frameworkü ve kütüphane kendi ekosisteminde bu konuları ele alan ve yöneten sistemlere sahipler. Bu kütüphaneleri(i18n-js, i18next python-i18n, go18n vb.) kullanarak server tarafınızı daha kolay yönetebilirsiniz.


1. **Locale Bilgisinin İşlenmesi:**
   - **Header'ın Pars Edilmesi:** Sunucu, istemciden gelen "Accept-Language" header'ını parse ederek, en uygun dilde yanıt üretir. Header, birden fazla dil içerebilir ve sunucu, en uygun dil eşleşmesini yapar. Örneğin, "Accept-Language: en-US, en;q=0.9, fr;q=0.8" header'ını işleyerek en uygun locale belirlenir.
     ```python
     from flask import request

     def get_preferred_language():
         preferred_language = request.headers.get('Accept-Language')
         # Parse and determine the best match
         return determine_lang(preferred_language)
     ```

2. **İçeriklerin Lokalize Edilmesi:**
   - **Veritabanı ve Locale 1:** Sunucu tarafında, dil ve yerel ayar desteği için veritabanı yapısının da buna uygun şekilde tasarlanması gerekir. Örneğin, bir ürün tablosunda ürün adları ve açıklamaları farklı dillerde saklanabilir:
     ```sql
     CREATE TABLE products (
         id SERIAL PRIMARY KEY,
         name_en TEXT,
         name_fr TEXT,
         description_en TEXT,
         description_fr TEXT
     );
     ```
   - **Veritabanı ve Locale 2:** Sunucu tarafında, örneğin bir ürünün içeriklerini farklı dillere uygun sunmak istiyorsak içeriği direkt olarak belirli dildeki payload yerine ilgili translation dosyasındaki yolu(path) i de tutulabilir. Tüm içeriklerin olduğu bir json dosyanın sistemde olduğunu düşünelim:
     - `en.json`: 
     ```json
     {
        "product": {
            "apple": {
                "content": "this is apple content",
                "name": "apple"
            }
        }
     }
     ```
     - Şimdi ise bunu veritabanında bir kayıt için kullanmak istediğimiiz varsayalım. Veritabanına ilgili json ın yalnızca indexini kaydedeceğiz. Ve her bu ürüne istek atıldıgında ilgili clientın header da gönderdiği locale'e göre ilgili en.json, es.json gibi translation filedaki karşılığını clienta göndereceğiz.
     - `ürüne ait rastgele bir veritabanı kaydı`
     ```json
     {
         "id": "$RANDOM_ID",
         "content": "product.apple.name",
         "name": "product.apple.name"
     }
     ```
   - **Dil Dinamiklerinin Yönetimi:** Sunucu, içeriklerin yerel versiyonlarını döndürürken performansı optimize etmek için önbellekleme (caching) stratejilerini kullanabilir. Bu, sık kullanılan dillerin içeriklerini hızlı bir şekilde sunmayı sağlar.

3. **Fallback Mekanizması:**
   - **Dil Desteği Olmayan Durumlar:** Sunucu, istemciden gelen taleplerde desteklenmeyen bir dil belirtildiğinde, varsayılan bir dil (default locale) belirlemelidir. Örneğin, desteklenmeyen bir dil geldiğinde İngilizce (en-US) içerik döndürülebilir.
     ```python
     SUPPORTED_LANGUAGES = ['en-US', 'fr-FR']
     DEFAULT_LANGUAGE = 'en-US'

     def get_locale(requested_language):
         return requested_language if requested_language in SUPPORTED_LANGUAGES else DEFAULT_LANGUAGE
     ```

4. **Veritabanı Modelleme:**
   - **Çok Dilli Veri Yapıları:** Çok dilli içerik yönetimi, veritabanı tasarımında da kendini gösterir. Tüm dil varyasyonları için tek bir tablo yerine, ayrı lokalizasyon tabloları kullanılabilir:
     ```sql
     CREATE TABLE product_translations (
         id SERIAL PRIMARY KEY,
         product_id INT REFERENCES products(id),
         locale VARCHAR(10),
         name TEXT,
         description TEXT
     );
     ```
   - **Veri Getirme Stratejileri:** Sunucu, veritabanından veri çekerken locale bilgisine dayalı sorgular yapar. Örneğin:
     ```sql
     SELECT name, description FROM product_translations WHERE product_id = 1 AND locale = 'fr-FR';
     ```

#### **API Tasarım Prensipleri**

1. **RESTful API'de Çok Dilli Destek:**
   - **Dil Başlığı ve Yönlendirme:** RESTful API'lerde, locale bilgisi "Accept-Language" header'ında belirtilir. Sunucu, bu bilgiyi kullanarak ilgili dilde içerik üretir ve döner. Eğer içerik mevcut değilse, Fallback dil kullanılarak içerik döndürülür.
   - **Versionlama ve Dil Desteği:** API'lerin çok dilli destek sunarken versiyonlama yapması da gerekebilir. Örneğin, bir API v2'de daha fazla dil desteği sunabilir ve eski versiyonlarda bu diller desteklenmeyebilir.

2. **GraphQL API'de Çok Dilli Destek:**
   - **Dil Seçimine Dayalı Dinamik Veri Getirme:** GraphQL, istemcinin spesifik dilde içerik talep edebilmesine olanak tanır. Bu, sorgunun bir parçası olarak gönderilir:
     ```graphql
     query getProduct($locale: String!) {
         product(id: "1") {
             name(locale: $locale)
             description(locale: $locale)
         }
     }
     ```
     - **Resolver Fonksiyonları:** Backend'de GraphQL resolver fonksiyonları, `locale` parametresine göre içerik döndürür. Bu fonksiyonlar, locale'a göre veritabanından doğru içeriği çeker:
       ```javascript
       const resolvers = {
           Query: {
               product: (_, { id, locale }) => {
                   return getProductByLocale(id, locale);
               }
           }
       };
       ```
   - **Dinamik İçerik ve Fallback:** GraphQL, dil desteklenmediğinde fallback mekanizması uygulayarak dinamik içerik döndürebilir. Örneğin, belirli bir locale için içerik mevcut değilse, varsayılan dilde içerik sunulabilir.

3. **API Güvenliği ve Dil Yönetimi:**
   - **Locale Bilgilerinin Doğrulanması:** Sunucu, istemciden gelen locale bilgilerinin geçerliliğini doğrulamalıdır. Bu, istemcinin sahte veya desteklenmeyen bir dil göndermesini engeller. Yanlış bir locale gönderildiğinde, uygun bir hata mesajı döndürülmelidir.
     ```http
     HTTP/1.1 400 Bad Request
     Content-Type: application/json

     {
         "error": "Unsupported locale"
     }
     ```
   - **Dil Bazlı Yetkilendirme:** Bazı durumlarda, belirli dillerdeki içerikler yalnızca belirli kullanıcı gruplarına sunulabilir. Bu, API'nin yetkilendirme mekanizmasıyla entegre edilmelidir.

#### **Çok Dilli API Tasarımında Performans Optimizasyonu**

1. **Önbellekleme Stratejileri:**
   - **Dil ve Yerel Ayar Tabanlı Caching:** Çok dilli API'lerde, aynı içeriğin farklı dillerde talep edilmesi yaygındır. Bu nedenle, dil ve locale bilgisine dayalı caching stratejileri kullanılarak yanıt süreleri iyileştirilebilir. Örneğin, `Varnish` veya `Redis` kullanarak, locale tabanlı cache mekanizmaları uygulanabilir.

2. **İçerik Dağıtım Ağı (Content Delivery Network - CDN) Entegrasyonu:**
   - **Dil Tabanlı CDN Dağıtımı:** Küresel kullanıcılar için dil tabanlı içerik dağıtımı, CDN'ler üzerinden optimize edilebilir. Bu, kullanıcıların coğrafi konumlarına en yakın sunuculardan yerel dilde içerik almalarını sağlar.

3. **Lazy Loading (Geç Yükleme):**
   - **Locale Tabanlı Lazy Loading:** İstemciden gelen taleplerin yoğun olduğu durumlarda, çok dilli içerikler sadece ihtiyaç duyulduğunda yüklenir. Bu, özellikle geniş içerik setlerine sahip uygulamalarda performansı artırır.


#### **Yerelleştirme Sürecinin Yönetimi ve İletişimi**
Yerelleştirme süreci, çeşitli ekiplerin işbirliğini gerektirir. Çevirmenler, geliştiriciler, proje yöneticileri ve yerel pazarlama ekiplerinin, süreç boyunca etkili bir şekilde iletişim kurması önemlidir.

- **Çevik (Agile) Yönetim:** Çevik yöntemler kullanarak yerelleştirme sürecinin iteratif olarak yönetilmesi, sürekli geri bildirim alınmasını ve sürecin optimize edilmesini sağlar. Scrum veya Kanban gibi çevik yönetim araçları, ekiplerin yerelleştirme süreçlerini daha esnek ve verimli bir şekilde yönetmesine olanak tanır.
- **İletişim ve Eğitim:** Yerelleştirme sürecinde rol alan tüm paydaşların, süreç hakkında yeterli bilgiye sahip olması gerekir. Bu nedenle, yerelleştirme öncesinde ve sırasında eğitimler düzenlenmeli, süreç boyunca açık ve sürekli iletişim kanalları açık tutulmalıdır.


![i18-l10](/img/i18-l10.jpeg)


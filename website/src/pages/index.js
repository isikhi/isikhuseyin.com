import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Work Together',
        imageUrl: 'img/undraw_docusaurus_mountain.svg',
        description: (
            <>
                We can build new products, systems and environment. I can help you to backend development, system architecture and AiOps area.
                While building scalable solutions along with modern practices, I am eager to contribute to projects that create innovation. 
                Specifically, I am interested in roles involving backend projects, data pipelines, LLMs and r&d projects.  
                I have an electric/electronic and cybersecurity background and mindset, where I can apply my skills to variaty problems, and create impactful solutions to business.
            </>
        ),
    },
    {
        title: 'Experience',
        imageUrl: 'img/undraw_docusaurus_tree.svg',
        description: (
            <>
                Over the years, I have gained strong experience across various systems, with a strong focus on startups. 
                My expertise lies in designing efficient system architectures in a quick way while implementing scalable infrastructures, and integrating modern DevOps practices. 
                I also try to approach projects with a customer-focused perspective, ensuring solutions are forward-thinking and resilient while staying grounded in practical, reliable development practices.
            </>
        ),
    },
    {
        title: 'Insights',
        imageUrl: 'img/undraw_docusaurus_react.svg',
        description: (
            <>
                I try to reflect on the constantly evolving world of technology whenever I can find a time or after an epic/milestone work has been done. 
                Trying to discuss modern software development practices, recent advances in systems, AI, and lessons learned from working within the different problems/projects. 
                Technical deep dives to reflections on industry trends, my blog offers a mix of practical knowledge and thought-provoking discussions for fellas. 
                But you know chatgpt already does it much better. So probably you won't even look at that for new information. Whatever here is my two cents.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Hi there, this is Isik's website.`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

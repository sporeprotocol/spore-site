import React, { ReactElement, useEffect, useState, useRef } from 'react';
import styles from './index.module.scss';

interface Props {
    svg: ReactElement;
    title: string;
    subtitle: string;
    content: string;
    index: number;
}

const AboutIntroItem: React.FC<Props> = ({ svg, title, subtitle, content, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const svgRef = useRef(null);
    const isEven = index % 2 === 0;

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1
        };

        const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        };


        const svgObserver = new IntersectionObserver(observerCallback, observerOptions);

        if (svgRef.current) {
            svgObserver.observe(svgRef.current);
        }

        return () => {  // Cleanup
            if (svgRef.current) {
                svgObserver.unobserve(svgRef.current);
            }
        };
    }, []);

    return (
        <div className={isEven ? styles.evenWrapper : styles.oddWrapper}>
            <div className={`${styles.svgWrapper} ${isVisible ? styles.isVisible : ''}`} ref={svgRef}>
                {svg}
            </div>
            <div className={styles.textWrapper}>
                <div className={`${styles.title} sub-header`}>{title}</div>
                <h3 className={styles.subtitle}>{subtitle}</h3>
                <p className={`${styles.content} body-1`}>{content}</p>
            </div>
        </div>
    );
}

export default AboutIntroItem;

import React, { useState, useEffect } from 'react';
import style from '../static/carosel.module.scss';

import logo from '../static/img/icon.png';

const Carousel: React.FC<CarouselProps> = ({ images }): React.JSX.Element => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);  

    useEffect(() => {
        const fadeTimeout = setTimeout(() => {
            setFade(false); 
            const changeImageTimeout = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true); 
            }, 1000);

            return () => clearTimeout(changeImageTimeout);
        }, 5000);  

        return () => clearTimeout(fadeTimeout);
    }, [currentIndex]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <>
        <div className={style.carouselContainer}>
            <div className={style.slideshow}>
                What's new:
                <img
                    src={images[currentIndex]}
                    alt="carousel"
                    className={style.visible}
                />
                <div className={style.dots}>
                    {images.map((_, idx) => (
                        <span
                            key={idx}
                            className={`${style.dot} ${idx === currentIndex ? style.active : ''}`}
                            onClick={() => goToSlide(idx)} 
                        ></span>
                    ))}
                </div>
            </div>
            <div className={style.rapidLinks}>
                <img src={logo} width='30px' height='30px' /> New Tools:
                <br />
                <br />
            <div className={style.gridContainer}>
                <div className={style.gridItem}>Firewall</div>
                <div className={style.gridItem}>Full Permisison</div>
                <div className={style.gridItem}>Reset Activation</div>
                <div className={style.gridItem}>nbus.data</div>
            </div>
            </div>
        </div>
        </>
    );
};

interface CarouselProps {
    images: string[];
}

export default Carousel;

import React from "react";
import style from "../static/components.module.scss";
import Carousel from "../utilities/Carousel";

import securitytool from '../static/img/slideshow/securitytool.png';
import csdmlitereset from '../static/img/slideshow/csdmlitereset.png';
import dbanalyser from '../static/img/slideshow/dbanalyser.png';
import newversion from '../static/img/slideshow/systeminfo.png';

const Home = (): React.JSX.Element => {
    const images = [
        newversion,
        securitytool,
        csdmlitereset,
        dbanalyser
        
    ]

    return (
        <>
        <div className={style.homeContainer}>
        <div className={style.message}>
        <p className={style.homeTitle}>Welcome, <strong>Technician</strong>!</p>
        <p>This tool is designed to assist you in your daily tasks with Carestream Dental. 
        <br />
        Here, you'll find a range of handy tools created to automate routine or lengthy practices, saving you time when working with us. We recommend using this tool to carry out specific tasks after your own troubleshooting. If you're looking to understand an issue rather than resolve it, please don't hesitate to contact our support!</p>
        </div>  
        <div className={style.carousel}><Carousel images={ images }/></div>        
        </div>
        </>
    );
}

export default Home;
import React, { useState } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import style from '../static/toolsLayout.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NbusData from '../tools/NbusData';
import CSImagingTitle from "../product_titles/CSImagingTitle";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import DbAnalyser from "../tools/DbAnalyser";
import CsdmLiteReset from "../tools/CsdmLiteReset";
import SqlTableRemover from "../tools/SqlTableRemover";

const CSImaging = (): React.JSX.Element => {

    const [isActive, setIsActive ]= useState('/');

    const toggleActive = (path: string) => {
        setIsActive(path);
    };

    const views = [
        { path: "/", element: <CSImagingTitle /> },
        { path: "/nbus-data", element: <NbusData /> },
        { path: "/db-analyser", element: <DbAnalyser /> },
        { path: "/csdml-reset", element: <CsdmLiteReset /> },
        { path: "/sql-remover", element: <SqlTableRemover /> }
    ];

    return (
        <>
        <div className={style.menuContainer}>
            <div className={style.menuSx}>
                
                <NavLink to='/csimaging/' className={isActive === '/' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/')}>
                    <div>
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faServer} />&nbsp;&nbsp;CS Imaging
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/csimaging/nbus-data' className={isActive === '/nbus-data' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/nbus-data')}>
                    <div>
                        <br />
                        Nbus.data
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/csimaging/db-analyser' className={isActive === '/db-analyser' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/db-analyser')}>
                    <div>
                        <br />
                        DB Analyser
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/csimaging/csdml-reset' className={isActive === '/csdml-reset' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/csdml-reset')}>
                    <div>
                        <br />
                        CSDMLite Reset
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/csimaging/sql-remover' className={isActive === '/sql-remover' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/sql-remover')}>
                    <div>
                        <br />
                        SQL Table Remover
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                



            </div>
            <div className={style.menuDx}>
                <Routes>
                    {views.map((view, index) => (
                    <Route key={index} path={view.path} element={view.element} />
                    ))} 
                </Routes>
            </div>
        </div>
        </>
    );
};

export default CSImaging;
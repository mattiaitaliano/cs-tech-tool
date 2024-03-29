import React, { useState } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import style from '../static/toolsLayout.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UtilityTitle from "../product_titles/UtilityTitle";

import SecurityTool from "../tools/SecurityTool";
import Boardsave from "../tools/Boardsave";
import SystemInfoComponent from "../tools/SystemInfo";
import LogCleaner from "../tools/LogCleaner";


import { faServer } from "@fortawesome/free-solid-svg-icons";
import LogSummary from "../tools/LogSummary";

const Utility = (): React.JSX.Element => {

    const [isActive, setIsActive ]= useState('/');

    const toggleActive = (path: string) => {
        setIsActive(path);
    };

    const views = [
        { path: "/", element: <UtilityTitle /> },
        { path: "/security-tool", element: <SecurityTool /> },
        { path: "/boardsave-finder", element: <Boardsave /> },
        { path: "/specifics-checking", element: <SystemInfoComponent /> },
        { path: "/logs-cleaner", element: <LogCleaner /> },
        { path: "/logs-summary", element: <LogSummary /> },
    ];

    return (
        <>
        <div className={style.menuContainer}>
            <div className={style.menuSx}>
                
                <NavLink to='/utility/' className={isActive === '/' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/')}>
                    <div>
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faServer} />&nbsp;&nbsp;Utility
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/utility/security-tool' className={isActive === '/security-tool' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/security-tool')}>
                    <div>
                        <br />
                        CS Security
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/utility/boardsave-finder' className={isActive === '/boardsave-finder' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/boardsave-finder')}>
                    <div>
                        <br />
                        Boardsave Finder
                        <br />
                        <br />
                    </div>
                </NavLink>  
                <hr />
                <NavLink to='/utility/specifics-checking' className={isActive === '/specifics-checking' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/specifics-checking')}>
                    <div>
                        <br />
                        System Check
                        <br />
                        <br />
                    </div>
                </NavLink>   
                <hr />
                <NavLink to='/utility/logs-cleaner' className={isActive === '/logs-cleaner' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/logs-cleaner')}>
                    <div>
                        <br />
                        Logs Cleaner
                        <br />
                        <br />
                    </div>
                </NavLink>
                <hr />
                <NavLink to='/utility/logs-summary' className={isActive === '/logs-summary' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/logs-summary')}>
                    <div>
                        <br />
                        Logs Summary
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

export default Utility;
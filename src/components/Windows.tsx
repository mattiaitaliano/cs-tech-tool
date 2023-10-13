import React, { useState } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import style from '../static/toolsLayout.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ShowIp from "../tools/ShowIp";
import StartUp from "../tools/StartUp";
import WindowsTitle from "../product_titles/WindowsTitle";

import { faServer } from "@fortawesome/free-solid-svg-icons";

const Windows = (): React.JSX.Element => {

    const [isActive, setIsActive ]= useState('/');

    const toggleActive = (path: string) => {
        setIsActive(path);
    };

    const views = [
        { path: "/", element: <WindowsTitle /> },
        { path: "/show-ip", element: <ShowIp /> },
        { path: "/fast-startup", element: <StartUp /> }
    ];

    return (
        <>
        <div className={style.menuContainer}>
            <div className={style.menuSx}>
                
                <NavLink to='/windows/' className={isActive === '/' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/')}>
                    <div>
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faServer} />&nbsp;&nbsp;CS Activation
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/windows/show-ip' className={isActive === '/show-ip' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/show-ip')}>
                    <div>
                        <br />
                        Show IP
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/windows/fast-startup' className={isActive === '/fast-startup' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/fast-startup')}>
                    <div>
                        <br />
                        Start-up
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

export default Windows;
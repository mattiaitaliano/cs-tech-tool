import React, { useState } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import style from '../static/toolsLayout.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ResetActivation from '../tools/ResetActivation';
import ActivationTitle from "../product_titles/ActivationTitle";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const Activation = (): React.JSX.Element => {

    const [isActive, setIsActive ]= useState('/');

    const toggleActive = (path: string) => {
        setIsActive(path);
    };

    const views = [
        { path: "/", element: <ActivationTitle /> },
        { path: "/reset-activation", element: <ResetActivation /> }
    ];

    return (
        <>
        <div className={style.menuContainer}>
            <div className={style.menuSx}>
                
                <NavLink to='/activation/' className={isActive === '/' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/')}>
                    <div>
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faServer} />&nbsp;&nbsp;CS Activation
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/activation/reset-activation' className={isActive === '/reset-activation' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/reset-activation')}>
                    <div>
                        <br />
                        Reset Activation
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

export default Activation;
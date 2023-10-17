import React, { useState } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import style from '../static/toolsLayout.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NbusData from '../tools/NbusData';
import FullPermission from '../tools/FullPermission';
import CSImagingTitle from "../product_titles/CSImagingTitle";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import CleanInstallation from "../tools/CleanInstallation";

const CSImaging = (): React.JSX.Element => {

    const [isActive, setIsActive ]= useState('/');

    const toggleActive = (path: string) => {
        setIsActive(path);
    };

    const views = [
        { path: "/", element: <CSImagingTitle /> },
        { path: "/nbus-data", element: <NbusData /> },
        { path: "/full-permission", element: <FullPermission /> },
        { path: "/clean_installation", element: <CleanInstallation /> }
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
                <NavLink to='/csimaging/full-permission' className={isActive === '/full-permission' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/full-permission')}>
                    <div>
                        <br />
                        Full permission
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/csimaging/clean_installation' className={isActive === '/clean_installation' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/clean_installation')}>
                    <div>
                        <br />
                        Clean Installation
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
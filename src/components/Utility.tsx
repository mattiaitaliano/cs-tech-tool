import React, { useState } from "react";
import { NavLink, Route, Routes } from 'react-router-dom';
import style from '../static/toolsLayout.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UtilityTitle from "../product_titles/UtilityTitle";

import DisLicense from "../tools/DisLicense";
import Firewall from "../tools/Firewall";
import InstallCPP from "../tools/InstallCPP";
import OpenSampleAcq from "../tools/OpenSampleAcq";
import OpenTW from "../tools/OpenTW";
import ResetActivation from "../tools/ResetActivation";
import ShowIp from "../tools/ShowIp";


import { faServer } from "@fortawesome/free-solid-svg-icons";

const Utility = (): React.JSX.Element => {

    const [isActive, setIsActive ]= useState('/');

    const toggleActive = (path: string) => {
        setIsActive(path);
    };

    const views = [
        { path: "/", element: <UtilityTitle /> },
        { path: "/dis-license", element: <DisLicense /> },
        { path: "/firewall", element: <Firewall /> },
        { path: "/install-cpp", element: <InstallCPP /> },
        { path: "/open-sample", element: <OpenSampleAcq /> },
        { path: "/open-tw", element: <OpenTW /> },
        { path: "/reset-activation", element: <ResetActivation /> },
        { path: "/show-ip", element: <ShowIp /> }
    ];

    return (
        <>
        <div className={style.menuContainer}>
            <div className={style.menuSx}>
                
                <NavLink to='/csimaging/' className={isActive === '/' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/')}>
                    <div>
                        <br />
                        <br />
                        <FontAwesomeIcon icon={faServer} />&nbsp;&nbsp;Utility
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/csimaging/nbus-data' className={isActive === '/nbus-data' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/nbus-data')}>
                    <div>
                        <br />
                        nbus.data
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
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
                <NavLink to='/utility/firewall' className={isActive === '/firewall' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/firewall')}>
                    <div>
                        <br />
                        Firewall
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/utility/open-tw' className={isActive === '/open-tw' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/open-tw')}>
                    <div>
                        <br />
                        TW folder
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/utility/install-cpp' className={isActive === '/install-cpp' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/install-cpp')}>
                    <div>
                        <br />
                        Visual c++
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/utility/dis-license' className={isActive === '/dis-license' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/dis-license')}>
                    <div>
                        <br />
                        DIS License
                        <br />
                        <br />
                    </div>
                </NavLink>                
                <hr />
                <NavLink to='/utility/open-sample' className={isActive === '/open-sample' ? style.activeLinkTool : style.linkTool} onClick={ () => toggleActive('/open-sample')}>
                    <div>
                        <br />
                        Sample Acq
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
import { ReactElement, MouseEventHandler } from 'react';
import style from '../static/utilities.module.scss'

const Overlay = ({ isOpen, onClose, children }: OverlayProps): React.JSX.Element => {
    return (
        <>
        {
            isOpen ? (
                <div className={style.overlay}>
                    <div className={style.overlayBackground} onClick={onClose}></div>
                        <div className={style.overlayContainer}>

                            <div className={style.overlayContent}>
                                {children}
                            </div>

                            <div className={style.overlayOptions}>
                                <button className={style.closeOverlay} type="button" onClick={onClose}>Close</button>
                            </div>


                        

                    </div>
                </div>
            ) : null
        }
        </>
    )
};   

interface OverlayProps {
    isOpen: boolean, 
    onClose: MouseEventHandler<HTMLElement> | undefined, 
    children: ReactElement
};

export default Overlay;
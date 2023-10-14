import style from '../static/toolsLayout.module.scss';
import logo from '../static/img/icon.png';

const CsImagingTitle = (): React.JSX.Element => {
    return (
        <>
            <div className={style.toolPage}>
                <h1><img src={logo}/>&nbsp;&nbsp;CS Imaging Tools</h1>
                <br />
                <h2>
                    These tools are designed to help you with various issue or necessities with <strong>CS Imaging</strong>.
                </h2>
                <br />
                <br />
                    <h3>
                        Select a tool from the <strong>left menu</strong>
                    </h3>.
                </div>
        </>
    );
}

export default CsImagingTitle;
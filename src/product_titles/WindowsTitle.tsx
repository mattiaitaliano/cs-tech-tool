import style from '../static/toolsLayout.module.scss';
import logo from '../static/img/icon.png';

const WindowsTitle = (): React.JSX.Element => {
    return (
        <>
            <div className={style.toolPage}>
                <h1><img src={logo}/>&nbsp;&nbsp;Windows Tools</h1>
                <br />
                <h2>
                    These tools are designed to help you with various issue or necessities with <strong>Windows</strong> relating to the usage of Carestream Dental products.
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

export default WindowsTitle;
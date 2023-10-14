import style from '../static/toolsLayout.module.scss';
import logo from '../static/img/icon.png';

const UtilityTitle = (): React.JSX.Element => {
    return (
        <>
            <div className={style.toolPage}>
                <h1><img src={logo}/>&nbsp;&nbsp;Utility Tools</h1>
                <br />
                <h2>
                    These tools are designed to help you across the various <strong>Carestream Dental's products</strong>.
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

export default UtilityTitle;
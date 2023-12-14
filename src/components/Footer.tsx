import style from '../static/components.module.scss'

export default function Footer() {
    return (
        <footer>
            <div className={style.foot}>
            CS Tech Tool © 2023 Carestream Dental LLC
            </div>

            <div className={style.version}>
            v. 1.0.0 (beta)
            </div>
        </footer>
    )
}
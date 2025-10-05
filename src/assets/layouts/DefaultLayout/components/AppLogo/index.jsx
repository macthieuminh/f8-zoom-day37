import LogoSrc from "../../../../images/f8-logo.png"
import styles from "./AppLogo.module.scss"
import { NavLink } from "react-router"
export default function AppLogo() {
    return (
        <div className={styles.LogoWrapper}>
            <NavLink to="/">
                <img
                    className={styles.Logo}
                    src={LogoSrc}
                    alt="Học Lập Trình Để Đi Làm"
                />
            </NavLink>
            <p>Học Lập Trình Để Đi Làm</p>
        </div>
    )
}

import AppLogo from "../AppLogo"
import SearchForm from "../SearchForm"
import MyCourses from "../MyCourses"
import Notification from "../Notification"
import styles from "./Header.module.scss"

export default function Header() {
    return (
        <div className={styles.header}>
            <AppLogo />
            <SearchForm />
            <MyCourses />
            <Notification />
        </div>
    )
}

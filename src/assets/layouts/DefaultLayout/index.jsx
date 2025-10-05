import AppLogo from "./components/AppLogo"
import SearchForm from "./components/SearchForm"
import MyCourses from "./components/MyCourses"
import Notification from "./components/Notification"
import styles from "./DefaultLayout.module.scss"

export default function DefaultLayout() {
    return (
        <div className={styles.DefaultLayout}>
            <AppLogo></AppLogo>
            <SearchForm></SearchForm>
            <MyCourses></MyCourses>
            <Notification></Notification>
        </div>
    )
}

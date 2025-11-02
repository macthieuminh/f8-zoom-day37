import AppLogo from "./components/AppLogo"
import SearchForm from "./components/SearchForm"
import MyCourses from "./components/MyCourses"
import Notification from "./components/Notification"
import PerformanceDemo from "../../pages/PerformanceDemo"
import FocusDemo from "../../pages/FocusDemo"
import ModalDemo from "../../pages/ModalDemo"
import HOCDemo from "../../pages/HOCDemo"
import RenderPropsDemo from "../../pages/RenderPropsDemo"
import CustomHooksDemo from "../../pages/CustomHooksDemo"

import styles from "./DefaultLayout.module.scss"

export default function DefaultLayout() {
    return (
        <div className={styles.DefaultLayout}>
            {/* <AppLogo></AppLogo>
            <SearchForm></SearchForm>
            <MyCourses></MyCourses>
            <Notification></Notification> */}
            {/* <FocusDemo></FocusDemo> */}
            {/* <ModalDemo></ModalDemo> */}
            {/* <HOCDemo></HOCDemo> */}
            {/* <RenderPropsDemo></RenderPropsDemo> */}
            <CustomHooksDemo></CustomHooksDemo>
        </div>
    )
}

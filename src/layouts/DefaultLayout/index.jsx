import { useState } from "react";
import PerformanceDemo from "../../pages/PerformanceDemo";
import FocusDemo from "../../pages/FocusDemo";
import ModalDemo from "../../pages/ModalDemo";
import HOCDemo from "../../pages/HOCDemo";
import RenderPropsDemo from "../../pages/RenderPropsDemo";
import CustomHooksDemo from "../../pages/CustomHooksDemo";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styles from "./DefaultLayout.module.scss";

const components = {
    PerformanceDemo,
    FocusDemo,
    ModalDemo,
    HOCDemo,
    RenderPropsDemo,
    CustomHooksDemo,
};

export default function DefaultLayout() {
    const [activeComponent, setActiveComponent] = useState('PerformanceDemo');

    const handleMenuClick = (componentName) => {
        setActiveComponent(componentName);
    };

    const ActiveComponent = components[activeComponent];

    return (
        <div className={styles.DefaultLayout}>
            <Header />
            <div className={styles.mainContent}>
                <Sidebar onMenuClick={handleMenuClick} activeComponent={activeComponent} />
                <div className={styles.content}>
                    {ActiveComponent && <ActiveComponent />}
                </div>
            </div>
        </div>
    );
}

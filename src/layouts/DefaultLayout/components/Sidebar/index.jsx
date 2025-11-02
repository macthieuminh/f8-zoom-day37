import styles from "./Sidebar.module.scss"
import clsx from "clsx"

const Sidebar = ({ onMenuClick, activeComponent }) => {
    const menuItems = [
        "PerformanceDemo",
        "FocusDemo",
        "ModalDemo",
        "HOCDemo",
        "RenderPropsDemo",
        "CustomHooksDemo",
    ]

    return (
        <aside className={styles.sidebar}>
            <nav>
                <ul>
                    {menuItems.map((item) => (
                        <li key={item}>
                            <button
                                className={clsx(styles.menuButton, {
                                    [styles.active]: activeComponent === item,
                                })}
                                onClick={() => onMenuClick(item)}>
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar

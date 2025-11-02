import useApi from "../../hooks/useApi"
import useToggle from "../../hooks/useToggle"
import styles from "./CustomHooksDemo.module.scss"
import clsx from "clsx"

const APIPostList = "https://jsonplaceholder.typicode.com/posts"
const APIUsersList = "https://jsonplaceholder.typicode.com/users?_limit=5"

function PostList() {
    const { data, loading, error, refetch } = useApi(APIPostList)

    if (loading) return <div className={styles.loading}>Loading...</div>
    if (error) return <div className={styles.error}>Error: {String(error)}</div>

    return (
        <div className={styles.panel}>
            <button
                className={`${styles.btn} ${styles["btn--refetch"]}`}
                onClick={refetch}>
                Refetch Posts List
            </button>
            <div className={styles.list}>
                {data?.map((item) => (
                    <div className={styles.postItem} key={item.id}>
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    )
}
function UsersList() {
    const { data, loading, error, refetch } = useApi(APIUsersList)

    if (loading) return <div className={styles.loading}>Loading...</div>
    if (error) return <div className={styles.error}>Error: {String(error)}</div>

    return (
        <div className={styles.panel}>
            <button
                className={`${styles.btn} ${styles["btn--refetch"]}`}
                onClick={refetch}>
                Refetch Users List
            </button>
            <div className={styles.list}>
                {data?.map((item) => (
                    <div className={styles.userItem} key={item.id}>
                        <h3>Name :{item.name}</h3>
                        <p>Email : {item.email}</p>
                        <p>Location: {item.address?.street}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function CustomHooksDemo() {
    const [isPostListVisible, togglePostListVisible] = useToggle(false)
    const [isUsersListVisible, toggleUsersListVisible] = useToggle(false)
    const [darkThemes, toggleDarkThemes] = useToggle(false)
    return (
        <div className={clsx(styles.customHooks, { [styles.darkThemes]: darkThemes })}>
            <div className={styles.toolbar}>
                <button className={styles.btn} onClick={() => togglePostListVisible()}>
                    Toggle posts section
                </button>
                <button className={styles.btn} onClick={() => toggleUsersListVisible()}>
                    Toggle users section
                </button>
                <button onClick={() => toggleDarkThemes()} className={styles.btn}>
                    Toggle theme page
                </button>
            </div>
            <div className={styles.sections}>
                {isPostListVisible && <PostList />}
                {isUsersListVisible && <UsersList />}
            </div>
        </div>
    )
}
export default CustomHooksDemo

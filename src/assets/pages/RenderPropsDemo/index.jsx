import DataFetcher from "../../components/DataFetcher"
import styles from "./RenderPropsDemo.module.scss"
function RenderPropsDemo() {
    return (
        <div className={styles.container}>
            <div className={styles.postLists}>
                <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
                    {({ data, loading, error }) => {
                        if (loading) return <div>Loading posts...</div>
                        if (error) return <div>Error: {error}</div>
                        return (
                            <div>
                                <h3>Posts</h3>
                                {data?.map((post) => (
                                    <div key={post.id}>{post.title}</div>
                                ))}
                            </div>
                        )
                    }}
                </DataFetcher>
            </div>
            <div className={styles.usersLists}>
                <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
                    {({ data, loading, error }) => {
                        if (loading) return <div>Loading users...</div>
                        if (error) return <div>Error: {error}</div>
                        return (
                            <div>
                                <h3>Users</h3>
                                {data?.map((user) => (
                                    <div key={user.id}>
                                        {user.name} - {user.email}
                                    </div>
                                ))}
                            </div>
                        )
                    }}
                </DataFetcher>
            </div>
        </div>
    )
}
export default RenderPropsDemo

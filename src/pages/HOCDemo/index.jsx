import { useState } from "react"
import UserProfile from "../../components/UserProfile"
import ProductList from "../../components/ProductList"
import styles from './HOCDemo.module.scss'

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(false)
    const [productLoading, setProductLoading] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.actions}>
                <button className={styles.btn} onClick={() => setUserLoading(prev => !prev)}>User Profile</button>
                <button className={styles.btn} onClick={() => setProductLoading(prev => !prev)}>Prodcut List</button>
            </div>
            <div className={styles.content}>
                <UserProfile isLoading={userLoading} />
                <ProductList isLoading={productLoading} />
            </div>
        </div>
    )
}

export default HOCDemo

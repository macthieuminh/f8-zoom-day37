import { DATA } from "./data"
import { useState, useEffect } from "react"
import styles from "./MyCourses.module.scss"

export default function MyCourses() {
    const [isShow, setShow] = useState(false)
    const data = Object.values(DATA).flatMap((group) => group)

    useEffect(() => {}, [])
    return (
        <div className={styles.wrapper}>
            <button onClick={() => setShow((prev) => !prev)}>Khóa học của tôi</button>
            {isShow && (
                <div className={styles.dropdown}>
                    <section className={styles.list}>
                        {data.map((cour) => (
                            <div key={cour.id} className={styles.item}>
                                <h2 className={styles.itemTitle}>{cour.title}</h2>
                                <p className={styles.itemDesc}>{cour.desc}</p>
                            </div>
                        ))}
                    </section>
                </div>
            )}
        </div>
    )
}

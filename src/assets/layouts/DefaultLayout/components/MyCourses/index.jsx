import { DATA } from "./data"
import styles from "./MyCourses.module.scss"

export default function MyCourses() {
    const data = Object.values(DATA).flatMap((group) => group)
    return (
        <div className={styles.dropdown}>
            <h1>Khoá học của tôi</h1>
            <section className={styles.list}>
                {data.map((cour) => (
                    <div key={cour.id} className={styles.item}>
                        <h2 className={styles.itemTitle}>{cour.title}</h2>
                        <p className={styles.itemDesc}>{cour.desc}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

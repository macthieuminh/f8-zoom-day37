import styles from "./SearchForm.module.scss"
import { IconCourse, IconPost, IconVideo } from "../../../../assets/icons"
import { useState, useEffect, useRef } from "react"

export default function SearchForm() {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")
    const rootRef = useRef(null)

    useEffect(() => {
        function handleClick(e) {
            if (!rootRef.current) return
            if (!rootRef.current.contains(e.target)) setIsOpen(false)
        }
        function handleEsc(e) {
            if (e.key === "Escape") setIsOpen(false)
        }
        document.addEventListener("mousedown", handleClick)
        window.addEventListener("keydown", handleEsc)
        return () => {
            document.removeEventListener("mousedown", handleClick)
            window.removeEventListener("keydown", handleEsc)
        }
    }, [])

    return (
        <div className={styles.root} ref={rootRef}>
            <div className={`${styles.control} ${isOpen ? styles.open : ""}`}>
                <input
                    id="input"
                    className={styles.input}
                    type="text"
                    placeholder="Nhập từ khoá cần tìm..."
                    value={query}
                    onFocus={() => setIsOpen(true)}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                    <button className={styles.clear} onClick={() => setQuery("")}>
                        ✕
                    </button>
                )}
            </div>
            {isOpen && (
                <div className={styles.dropdown}>
                    <section>
                        <div className={styles.sectionHeader}>
                            <h1 className={styles.sectionLabel}>KHOÁ HỌC</h1>
                            <span className={styles.sectionDot} />
                        </div>
                        <div className={styles.list}>
                            <div className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <IconCourse className={styles.itemIcon} />
                                    <h2 className={styles.itemTitle}>
                                        Khoá học {query} tổng quát
                                    </h2>
                                </div>
                                <p className={styles.itemDesc}>Best seller ✅</p>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <IconCourse />
                                    <h2 className={styles.itemTitle}>
                                        Khoá học {query} cơ bản
                                    </h2>
                                </div>
                                <p className={styles.itemDesc}>Must try 👍</p>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <IconCourse />
                                    <h2 className={styles.itemTitle}>
                                        Khoá học {query} nâng cao
                                    </h2>
                                </div>
                                <p className={styles.itemDesc}>HOT 🔥</p>
                            </div>
                        </div>
                        <button className={styles.moreBtn}>Xem thêm</button>
                    </section>
                    <section>
                        <div className={styles.sectionHeader}>
                            <h1 className={styles.sectionLabel}>BÀI VIẾT</h1>
                            <span className={styles.sectionDot} />
                        </div>
                        <div>
                            <div className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <IconPost />
                                    <h2>Bàn về {query}</h2>
                                </div>
                                <p className={styles.itemDesc}>
                                    Hỏi đáp dành riêng {query}
                                </p>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <IconPost />
                                    <h2>Cách dùng {query} như thế nào ?</h2>
                                </div>
                                <p className={styles.itemDesc}>
                                    Cẩm nang dành cho {query}
                                </p>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <IconPost />
                                    <h2>10 điều lưu ý về {query}</h2>
                                </div>
                                <p className={styles.itemDesc}>
                                    Tips hữu ích cho {query}
                                </p>
                            </div>
                        </div>
                        <button className={styles.moreBtn}>Xem thêm</button>
                    </section>
                    <section>
                        <div className={styles.sectionHeader}>
                            <h1 className={styles.sectionLabel}>VIDEO</h1>
                            <span className={styles.sectionDot} />
                        </div>
                        <div>
                            <div className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <IconVideo />
                                    <h2>Videos: {query}</h2>
                                </div>
                                <p className={styles.itemDesc}>Hành trình {query}</p>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.itemHeader}>
                                    <IconVideo />
                                    <h2>Clips: {query}</h2>
                                </div>
                                <p className={styles.itemDesc}>Viral của {query}</p>
                            </div>
                        </div>
                        <button className={styles.moreBtn}>Xem thêm</button>
                    </section>
                </div>
            )}
        </div>
    )
}

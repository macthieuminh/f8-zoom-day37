import { useEffect, useMemo, useRef, useState } from "react"
import styles from "./Notification.module.scss"

const DataNotifications = [
    {
        id: 1,
        title: "Chào mừng!",
        message: "Bạn vừa đăng nhập thành công.",
        isRead: false,
        time: "1 phút trước",
    },
    {
        id: 2,
        title: "Cập nhật hệ thống",
        message: "Bảo trì dự kiến 02:00–02:30.",
        isRead: false,
        time: "10 phút trước",
    },
    {
        id: 3,
        title: "Khuyến mãi",
        message: "Nhận mã giảm 20% trong hôm nay.",
        isRead: true,
        time: "Hôm qua",
    },
    {
        id: 4,
        title: "Tin nhắn mới",
        message: "Bạn có 1 tin nhắn chưa đọc.",
        isRead: false,
        time: "2 giờ trước",
    },
]

export default function Notification() {
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState(DataNotifications)
    const rootRef = useRef(null)
    const unread = useMemo(() => items.filter((i) => !i.isRead).length, [items])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
        }
        const handleEsc = (e) => {
            if (e.key === "Escape") setOpen(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEsc)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleEsc)
        }
    }, [])

    const markAllRead = () =>
        setItems((prev) => prev.map((n) => ({ ...n, isRead: true })))
    const markReadById = (id) =>
        setItems((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
    const clearOne = (id) => setItems((prev) => prev.filter((n) => n.id !== id))

    return (
        <div ref={rootRef} className={styles.wrapper}>
            <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label="Mở thông báo"
                onClick={() => setOpen((o) => !o)}
                className={`${styles.bellBtn} ${open ? styles.active : ""}`}>
                🔔
                {unread > 0 && (
                    <span className={styles.badge}>{unread > 99 ? "99+" : unread}</span>
                )}
            </button>

            {open && (
                <div role="menu" className={styles.dropdown}>
                    <div className={styles.header}>
                        <span className={styles.headerTitle}>Thông báo</span>
                        <button
                            type="button"
                            onClick={markAllRead}
                            className={styles.markAll}>
                            Đánh dấu đã đọc hết
                        </button>
                    </div>

                    {items.length === 0 ? (
                        <div className={styles.empty}>Hiện chưa có thông báo nào.</div>
                    ) : (
                        <ul className={styles.list}>
                            {items.map((n) => (
                                <li
                                    key={n.id}
                                    className={`${styles.item} ${
                                        n.isRead ? styles.read : styles.unread
                                    }`}
                                    onClick={() => markReadById(n.id)}>
                                    <span className={styles.dotUnread} />
                                    <div className={styles.content}>
                                        <p className={styles.title}>{n.title}</p>
                                        <p className={styles.msg}>{n.message}</p>
                                        <div className={styles.meta}>{n.time}</div>
                                    </div>
                                    <button
                                        title="Xoá thông báo"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            clearOne(n.id)
                                        }}
                                        className={styles.clearBtn}>
                                        ×
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    )
}

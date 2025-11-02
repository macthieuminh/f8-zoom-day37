import { useState, useRef } from "react"
import Modal from "../../components/Modal"
import styles from "./ModalDemo.module.scss"
export default function ModalDemo() {
    const modalRef = useRef()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={() => modalRef.current?.open()}>
                Open Modal
            </button>
            <Modal
                isOpen={isOpen}
                ref={modalRef}
                onRequestOpen={() => setIsOpen(true)}
                onRequestClose={() => setIsOpen(false)}>
                <h1>This's Modal</h1>
                <p className={styles.p}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est omnis
                    quisquam fugiat iusto quia. Fugit dolorem, modi exercitationem,
                    molestias sequi earum porro minus nemo nostrum nam dolores.
                    Temporibus, expedita accusamus. Excepturi aut minima consequuntur nisi
                    voluptatibus, pariatur labore eveniet commodi. Harum praesentium quas
                    deleniti doloremque, animi reiciendis sequi aspernatur rerum rem quia
                    temporibus iure, doloribus odit earum, vero aliquid? Illo. Minima
                    ducimus, porro autem, nisi, ab eum impedit sunt excepturi magni eaque
                    aut. Obcaecati eligendi, harum facilis libero aperiam suscipit
                    laudantium est ex debitis, necessitatibus sed, fugiat vitae! Quidem,
                    similique? Optio, assumenda dolorem reprehenderit ut accusamus omnis
                    veniam ipsa cumque sequi, eveniet explicabo molestias suscipit
                    expedita velit, maxime amet nihil exercitationem ab minus? Accusamus
                    veniam est, iure quia maiores odit? Molestias autem libero est
                    voluptatem tenetur eligendi esse. Veniam autem non blanditiis dolorum
                    fugiat error ullam aspernatur veritatis vero voluptate ratione minus
                    aperiam nemo dolorem commodi aliquid, sit, doloremque quae.
                </p>
                <button className={styles.btn} onClick={() => modalRef.current?.close()}>
                    Ok, I got it
                </button>
            </Modal>
            <button
                className={`${styles.btn} ${styles.toggle}`}
                onClick={() => modalRef.current?.toggle()}>
                Toggle
            </button>
        </div>
    )
}

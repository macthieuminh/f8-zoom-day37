import {
    forwardRef,
    useImperativeHandle,
    useEffect,
    useState,
    useCallback,
    useRef,
} from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import styles from "./Modal.module.scss"

const Modal = forwardRef((props, ref) => {
    const {
        isOpen,
        onAfterOpen = () => {},
        onAfterClose = () => {},
        onRequestClose = () => {},
        onRequestOpen,
        closeTimeoutMS = 300,
        overlayClassName,
        className,
        bodyOpenClassName = "modal-open",
        htmlOpenClassName = "modal-open",
        shouldCloseOnOverlayClick = true,
        shouldCloseOnEsc = true,
        children,
    } = props

    const [isActive, setIsActive] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const closeBtnRef = useRef(null)
    const lastFocusedRef = useRef(null)

    const handleRequestClose = useCallback(() => {
        setIsActive(false)
        setIsClosing(true)
        const timer = setTimeout(() => {
            onAfterClose()
            onRequestClose()
        }, closeTimeoutMS)
        return () => clearTimeout(timer)
    }, [closeTimeoutMS, onAfterClose, onRequestClose])

    useImperativeHandle(ref, () => ({
        open: () => onRequestOpen?.(),
        close: () => handleRequestClose(),
        toggle: () => {
            if (isOpen) {
                handleRequestClose()
            } else {
                onRequestOpen?.()
            }
        },
    }))

    useEffect(() => {
        if (!shouldCloseOnEsc) return

        const handle = (e) => {
            if (e.code === "Escape") {
                handleRequestClose()
            }
        }
        if (isOpen) {
            document.addEventListener("keydown", handle)
            onAfterOpen()
        }
        return () => {
            document.removeEventListener("keydown", handle)
        }
    }, [isOpen, handleRequestClose, onAfterOpen, shouldCloseOnEsc])

    useEffect(() => {
        const html = document.documentElement
        const body = document.body

        if (isOpen) {
            lastFocusedRef.current = document.activeElement
            html.classList.add(htmlOpenClassName)
            body.classList.add(bodyOpenClassName)
        }

        return () => {
            html.classList.remove(htmlOpenClassName)
            body.classList.remove(bodyOpenClassName)

            if (lastFocusedRef.current instanceof HTMLElement) {
                lastFocusedRef.current.focus?.()
            }
        }
    }, [isOpen, bodyOpenClassName, htmlOpenClassName])

    useEffect(() => {
        if (!isOpen) return
        setIsClosing(false)
        const id = requestAnimationFrame(() => {
            setIsActive(true)
            closeBtnRef.current?.focus()
        })
        return () => cancelAnimationFrame(id)
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div
            className={clsx(
                styles.modal,
                isActive && styles.open,
                isClosing && styles.closing
            )}>
            <div className={clsx(styles.content, className)}>
                {/* Close Button */}
                <button
                    ref={closeBtnRef}
                    className={styles.closeBtn}
                    onClick={handleRequestClose}
                    aria-label="Close modal">
                    &times;
                </button>
                {/* Children */}
                <div className={styles.inner}>{children}</div>
            </div>
            <div
                className={clsx(styles.overlay, overlayClassName)}
                onClick={() => {
                    if (shouldCloseOnOverlayClick) handleRequestClose()
                }}
            />
        </div>
    )
})

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    children: PropTypes.node,
    onRequestOpen: PropTypes.func,
}
export default Modal

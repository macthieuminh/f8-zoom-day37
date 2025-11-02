import PropTypes from 'prop-types'
import styles from './withLoading.module.scss'

const withLoading = (WrappedComponent) => {
    const WithLoadingComponent = ({ isLoading, ...props }) => {
        if (isLoading) {
            return (
                <div className={styles.overlay}>
                    <div className={styles.spinner}></div>
                </div>
            )
        }

        return <WrappedComponent {...props} />
    }

    WithLoadingComponent.propTypes = {
        isLoading: PropTypes.bool
    }

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
    WithLoadingComponent.displayName = `withLoading(${wrappedComponentName})`

    return WithLoadingComponent
}

export default withLoading

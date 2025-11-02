import PropTypes from "prop-types"
import withLoading from "../../hoc/withLoading"
import avatar from "../../assets/images/avatar_placeholder.png"
import styles from "./UserProfile.module.scss"

const user = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },
]
function UserProfile() {
    if (!user) {
        return <div className={styles.container}>User not found.</div>
    }

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img
                    src={avatar}
                    alt={`${user.name}'s avatar`}
                    className={styles.avatar}
                />
            </div>
            <div className={styles.body}>
                <h2 className={styles.name}>{user.name}</h2>
                <p className={styles.username}>@{user.username}</p>
                <p className={styles.bio}>{user.bio}</p>
            </div>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.statValue}>{user.followers}</span>
                    <span className={styles.statLabel}>Followers</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statValue}>{user.following}</span>
                    <span className={styles.statLabel}>Following</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statValue}>{user.publicRepos}</span>
                    <span className={styles.statLabel}>Repos</span>
                </div>
            </div>
        </div>
    )
}

UserProfile.propTypes = {
    user: PropTypes.shape({
        avatarUrl: PropTypes.string,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        bio: PropTypes.string,
        followers: PropTypes.number,
        following: PropTypes.number,
        publicRepos: PropTypes.number,
    }),
}
const EnhancedUserProfile = withLoading(UserProfile)
export default EnhancedUserProfile

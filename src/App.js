
const styles = {
    wrapper: {
        height: '100vh',
        width: '100%',
        // backgroundColor: 'green',
    },
    userWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
}

const App = () => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.userWrapper}>
                Create your UserCard
            </div>
        </div>
    )
}

export default App
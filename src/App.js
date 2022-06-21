import UserList from './components/UserList'


const styles = {
    wrapper: {
        height: '100vh',
        width: '100%',
        // backgroundColor: 'green',
    },
    userWrapper: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        height: '100%',
    },
}

const App = () => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.userWrapper}>
                <UserList />
            </div>
        </div>
    )
}

export default App
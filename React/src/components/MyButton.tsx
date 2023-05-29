import styles from './MyButton.less'

const style1 = {
    width: 200,
    height: 46
}

function MyButton({text = "点击我", onClick123131}: {
    text?: string,
    onClick123131?: () => void
}) {
    return (
        <div>
            <h1>About</h1>
            <button className="myButton" onClick={onClick123131}>I'm a button</button>
            <button style={style1} className={styles.myButton2}>{text}</button>
        </div>
    );
}

export default MyButton;
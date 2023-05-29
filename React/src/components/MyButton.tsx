import styles from './MyButton.less'
import {useState} from "react";

const style1 = {
    width: 200,
    height: 46
}

function MyButton({text = "点击我", onClick123131}: {
    text?: string,
    onClick123131?: () => void
}) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>About</h1>
            <button className="myButton" onClick={onClick123131}>点击了{text}</button>
            <button style={style1} className={styles.myButton2} onClick={() => setCount(count + 1)}>自己的状态{count}</button>
        </div>
    );
}

export default MyButton;
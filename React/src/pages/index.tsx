import yayJpg from '../assets/yay.jpg';
import React from "react";
import MyButton from "@/components/MyButton";
import './index.css';

export default function HomePage() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h2>Yay! Welcome to umi!</h2>
            <p>
                <img src={yayJpg} width="388"/>
            </p>
            <button onClick={() => {
                setCount(count + 1)
            }}>asdadas
            </button>
            <p>
                To get started, edit <code>pages/index.tsx</code> and save to reload.
            </p>
            {count % 2 === 0 && (
                <MyButton/>
            )}
        </div>
    );
}

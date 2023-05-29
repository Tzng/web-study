import {useState} from "react";
import MyButton from "@/components/MyButton";

const data2 = [
    {title: 'Apple', id: 1},
    {title: 'Cabbage1', id: 2},
    {title: 'sadsa', id: 3},
]

export default function Day1() {

    const [products, setProducts] = useState([
        {title: 'Cabbage', id: 1},
        {title: 'Garlic', id: 2},
        {title: 'Apple', id: 3},
    ]);

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    const listItems = products.map(product => {
        const [a, setA] = useState(1)
            return (
                <li onClick={() => setA(a + 1)} key={product.id}>
                    {product.title}
                    {a}
                </li>
            )
        }
    );

    const addData = () => {
        console.log("新增");
        products.push({
            title: "asdadasd" + new Date().toLocaleString(),
            id: 3
        })
        setProducts([...products])
    }

    const changeData = () => {
        setProducts([...data2])
    }


    return (
        <>
            <ul>{listItems}</ul>
            <button onClick={addData}>新增</button>
            <button onClick={changeData}>切换数据</button>
            <MyButton text={count + ''} onClick123131={handleClick}/>
            <MyButton text={count + ''} onClick123131={handleClick}/>
        </>
    );
}
import { useState } from "react";
import QuizBox01 from "../components/QuizBox01";

export default function Quiz06() {
    let [boxArr, setBoxArr] = useState([]);

    let addBoxFront = (color) => {
        setBoxArr([{ color }, ...boxArr]);
    };

    let addBoxBack = (color) => {
        setBoxArr([...boxArr, { color }]);
    };

    return (
        <div >
            <div>
                <button onClick={() => addBoxFront("red")}>앞 빨간박스 추가</button>
                <button onClick={() => addBoxFront("blue")}>앞 파란박스 추가</button>
                <button onClick={() => addBoxFront("green")}>앞 초록박스 추가</button>
                <button onClick={() => addBoxBack("red")}>뒤 빨간박스 추가</button>
                <button onClick={() => addBoxBack("blue")}>뒤 파란박스 추가</button>
                <button onClick={() => addBoxBack("green")}>뒤 초록박스 추가</button>
            </div>

            <div style={{ display: "flex", gap : '1px'}}>
                {boxArr.map((item, index) => (
                    <QuizBox01 key={index} color={item.color} />
                ))}
            </div>
        </div>
    );
}

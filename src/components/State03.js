import { useState } from "react";

export default function State03() {


    // { key : value , key : [ ]}

    // [ ㅇ, ㅇ, ㅇ]
    // [ {}, {} , {}]

    // let arr = [1, 2, 3, 4, 5];

    let [arr, setArr] = useState([1, 2, 3, 4, 5]);

    const btn_func = () => {
        //배열에 값추가 unshift push splice...
        // arr.push(9);
        // console.log(arr); 재렌더링이 발생하지 않음

        let temp = [...arr]
        temp.push(9);
        setArr(temp);
        console.log(arr);
    }

    return (
        <div>
            {/* <button onClick={()=>{
                //바로 함수 적용 방법

            }}> */}
            <button onClick={btn_func}>벝은</button>
            {
                arr.map((val) => {
                    return (<p>{val}</p>)
                })
            }
        </div>
    )
}
import { useState } from "react";



export default function State01() {

    //React Hooks
    //useState -> 상태를 저장하는 변수 , 재렌더링이 되는 상황에서도 값이 계속 유지.

    //state 변수 값이 set함수를 통해서 변경 된 경우! -> 화면 재렌더링 (re-rendering)

    let cnt = 0; // 일반변수 -> 재렌더링 시점에 다시 호출 되기 떄문에 초기화가 되어버림 (값 유지 X)
    //const|let [변수명,set함수명] = useState(초기값);
    let [count, setCount] = useState(0);

    let [num, setNum] = useState(0);

    return (
        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>
            <button onClick={() => {
                console.log("cnt up");
                cnt++;
                console.log(cnt);

                //num끼워넣기
                setNum(num+1)
                console.log(num);
                
            }}>@cnt Up@</button>

            <br></br>

            <p>{count}</p>
            <button onClick={()=>{
                console.log("cnt up");
                //count++;  // 값 증가O (값변화O) , 재랜더링X why? set 함수를 통해서 값을 바꾼게 아니기 때문.
                //setCount(count = count + 1); XX
                setCount(count + 1)
                
                console.log(count);
            }}>count 증가 버튼</button>
        </div>
    )
}
import { useState } from "react";
import QuizBox01 from "../components/QuizBox01";

export default function Quiz05() {
    let [boxArr, setBoxArr] = useState([]);

    return (
        <div>
            <button
                onClick={() => {
                    setBoxArr([...boxArr, {}]);
                }}
            >추가</button>
            <br></br>

            {boxArr.map((_, index) => (<QuizBox01 key={index} />))}
        </div>
    );
}

// import { useState } from "react";

// export default function Quiz05() {
//     const [length, setLength] = useState(0);

//     return (
//         <div>
//             <button onClick={() => setLength(length + 1)}>추가</button>
//             <br></br>

//             {
//                 (() => {
//                     let arr = [];
//                     for (let i = 0; i < length; i++) {
//                         arr.push(<div key={i} className="box">박스</div>);
//                     }
//                     return arr;
//                 })()
//             }
//         </div>
//     );
// }
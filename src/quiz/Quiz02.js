import { useState } from "react";

export default function ComponentName() {
    let [textArr, setTextArr] = useState(["하나", "둘", "셋"]);
    let [index, setIndex] = useState(0);

    return (
        <div className="App">
            <p>{textArr[index]}</p>

            <button
                onClick={() => {
                    setIndex((index + 1) % textArr.length);
                }}
            >
                변경버튼
            </button>
        </div>
    );
}

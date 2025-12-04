import { useState } from "react";

export default function Quiz01() {
    const [count, setCount] = useState(0);

    return (
        <div>

            <button
                onClick={() => {
                    setCount(count + 2);
                }}
            > 짝수출력</button>
            <a className="font-red">{count}</a>
        </div>
    );
}

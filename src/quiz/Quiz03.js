import { useState } from "react";
import Quizcom from './Quizcom';

export default function Quiz03() {
    let [countArr, setCountArr] = useState(['하나', '둘', '셋', '넷', '다섯']);

    return (
        <div>
            <Quizcom list={countArr} />
        </div>
    );
}

import { useState } from "react"
import Box from "./Box"

export default function Props02 () {

    // 배열의 값이 변경되면서 -> 유지 -> 화면에 재렌더링
    let [textArr, setTextArr] = useState(['아침','점심','저녁'])
    let [detailArr, setDetailArr] = useState(['배곺다','졸립ㄴ다','피곦다ㅏ'])
    return (
        <div>
            <button onClick={()=>{

                //야식
                //행복하다

                let temp = [...textArr];
                
                temp.push('야식');
                setTextArr(temp);
                detailArr.push('행복하다');

                console.log(textArr);
                console.log(detailArr);


            }}>내용추가버튼</button>

            {
                textArr.map((item,index)=>{
                    return <Box text={textArr[index]} detail={detailArr[index]}></Box>
                })
            }
        </div>
    )
}
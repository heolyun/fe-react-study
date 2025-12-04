import Box from "./Box";

export default function Props01() {

    let arr = ['아침', '점심', '저녁'];
    let detail = ['배고프다', '졸리다', '피곤하다']
    return (
        <div>

            {
                //아침 0 점심 1 저녁 2

                arr.map((item, index) => (<Box text={arr[index]} detail={detail[index]} />))

            }

            <Box text={arr[0]} detail={detail[0]} />
            <Box text={arr[1]} detail={detail[1]} />
            <Box text={arr[2]} detail={detail[2]} />

            {/* <div style={{backgroundColor:'gray'}}>
                <h1>{arr[0]}</h1>
                <p>{detail[0]}</p>
            </div>

            <div style={{backgroundColor:'gray'}}>
                <h1>{arr[1]}</h1>
                <p>{detail[1]}</p>
            </div>

            <div style={{backgroundColor:'gray'}}>
                <h1>{arr[2]}</h1>
                <p>{detail[2]}</p>
            </div> */}
        </div>
    )
}
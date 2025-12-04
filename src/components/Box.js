

export default function Box(props) {

    return (
        <div style={{ backgroundColor: 'gray' }}>
            <h1>{props.text}</h1>
            <p>{props.detail}</p>
            {/* <h1></h1>
            <p>구분디테일</p> */}
        </div>)

}
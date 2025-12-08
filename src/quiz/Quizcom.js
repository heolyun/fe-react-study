export default function Quizcom({ list }) {
    return (
        <div>
            {list.map((item, index) => (
                <div key={index}>
                    <p className="title">제목: {item}</p>
                    <p className="textItem">내용: 내용 {item}</p>
                </div>
            ))}
        </div>
    );
}

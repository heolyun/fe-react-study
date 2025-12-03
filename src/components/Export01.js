import menus from "../data/mydata01"
import { menu4 } from "../data/mydata02"
import { menu5 } from "../data/mydata02"
import { menu6 } from "../data/mydata02"

export default function Export01 () {
    return (
        <div>
            <h1>Export01</h1>
            <h2>{menus}</h2>
            <h2>{menu4}</h2>
            <h2>{menu5}</h2>
            <h2>{menu6}</h2>
        </div>
    )
}
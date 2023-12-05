import { useState } from "react"

interface Props {
    math: string[]
}

const Operations = (props: Props) => {

    const [selectedI, setSelectedI] = useState(-1)

    return (
        <>
            <div>
                <ul className="list-group">
                    {props.math.map((operation, i) => {
                        return (
                        <li 
                        onClick={() => { 
                            setSelectedI(i) }} key={i} className={
                                selectedI === i
                                 ? 'list-group-item active' 
                                 : 'list-group-item'
                            }
                        >
                            {operation}
                        </li>)
                    })}
                </ul>
            </div>
        </>
    )
}
export default Operations
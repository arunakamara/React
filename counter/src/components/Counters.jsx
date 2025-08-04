import { useState } from "react"
import Counter from "./Counter"

export default function Counters() {
    const [counters, setCounters] = useState([
        {id: 1, value: 0},
        {id: 2, value: 6},
        {id: 3, value: 0},
        {id: 4, value: 0},
    ])
    return (
        <div>
           {counters.map(counter => <Counter key={counter.id} />)} 
        </div>
    )
}
import { use } from "react"
import { CountersContext } from "../store/CountersContext"


export default function NavBar(){
    const {counters} = use(CountersContext)
    const counts = counters.filter(c => c.value !== 0).length

    
    return (
        <nav className="flex gap-5 items-center h-12 bg-stone-300 p-4">
            <p className="font-bold text-lg">NavBar</p>
            <div className="size-7 bg-stone-100 rounded-full text-center text-stone-800 ">{counts}</div>
        </nav>
    )
}
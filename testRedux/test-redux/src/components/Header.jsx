
export default function Header() {

    return <>
    <header className="flex justify-between align-center p-2">
        <h2 className="text-2xl text-stone-50 font-bold ">Welcome USER</h2>
        <nav>
            <ul className="flex gap-2 text-white font-bold">
                <li>Orders</li>
                <li>Cart</li>
                <li>Account</li>
            </ul>
        </nav>
    </header>
    </>
}
export default function Navbar() {
    return (
        <nav className="flex light-bg justify-space">
            <div className="logo white">
                <a href="/">Jonathan Ortigueras</a>
            </div>

            <ul className="flex white">
                <li className="green">
                    <a href="/">{"< Home />"}</a>
                </li>
                <li>
                    <a href="/#about">About Me.</a>
                </li>
            </ul>
        </nav>
    )
}
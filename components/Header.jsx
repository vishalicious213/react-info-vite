import logo from "../public/react.svg"

export default function Header() {
    return (
        <header>
            <nav className="container">
                <img className="nav-logo" src={logo} />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
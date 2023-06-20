import logo from "../public/react.svg"

export default function Header() {
    return (
        <header>
            <nav>
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
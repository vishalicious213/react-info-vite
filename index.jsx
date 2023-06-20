import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import AboutReact from "./components/About"

function LearnReact() {
    return (
        <section>
            <h2>Why I want to learn React</h2>

            <ul className="factoids">
                <li>To build web applications</li>
                <li>To get a high-paying web developer job</li>
                <ul>
                    <li>To save my family and house</li>
                    <li>To fuel development of my own company and help other junior developers</li>
                    <li>To build the front-end of a new clinical application dream</li>
                </ul>
                <li>To help combat job and financial insecurity</li>
            </ul>
        </section>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2023 React In Development. All rights reserved.</small>
        </footer>
    )
}

function App() {
    return (
        <div>
            <Header />
            <AboutReact />
            <LearnReact />
            <Footer />
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)
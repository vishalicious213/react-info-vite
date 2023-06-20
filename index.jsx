import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import AboutReact from "./components/About"
import LearnReact from "./components/Learn"

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
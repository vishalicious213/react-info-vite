import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import AboutReact from "./components/About"
import LearnReact from "./components/Learn"
import Footer from "./components/Footer"

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
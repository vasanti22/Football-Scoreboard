import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import ScoresGrid from "./components/ScoresGrid/scoresgrid"

function App() {
    return (
        <div className="app">
            <Header />
                <div>
                   <ScoresGrid />
                </div>
            <Footer />
        </div>
    )
}
export default App
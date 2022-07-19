import Header from './components/Header'
import BScore from './components/BScore'
import BDetails from './components/BDetails'
import './App.css'

function App() {
    return (
        <section className='App'>
            <Header />
            <section className="main">
                <BScore />
                <BDetails />
            </section>
        </section>
    )
}

export default App

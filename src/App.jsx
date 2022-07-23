import Header from './components/Header'
import BScore from './components/BScore'
import BDetails from './components/BDetails'
import './App.css'

function App() {
    return (
        <section className='App sm:p-5 md:max-w-[900px]'>
            <Header />
            <section className="main-section md:flex md:space-x-5">
                <BScore />
                <BDetails />
            </section>
        </section>
    )
}

export default App

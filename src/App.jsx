import Header from './components/Header'
import BScore from './components/BScore'
import BDetails from './components/BDetails'
import './App.css'

function App() {
    return (
        <section className='App bg-bgmain text-white border border-orange-400 max-w-screen-md m-auto p-2 sm:p-5'>
            <Header />
            <section className="main-section md:flex">
                <BScore />
                <BDetails />
            </section>
        </section>
    )
}

export default App

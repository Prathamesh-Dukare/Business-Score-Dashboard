import Header from './components/Header'
import BScore from './components/BScore'
import BDetails from './components/BDetails'
import './App.css'

function App() {
    return (
        <section className='App bg-bgmain font-mulish text-white rounded-sm max-w-screen-md md:max-w-[900px] m-auto p-2 px-0 sm:p-5'>
            <Header />
            <section className="main-section md:flex md:space-x-5">
                <BScore />
                <BDetails />
            </section>
        </section>
    )
}

export default App

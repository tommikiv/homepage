import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

function App() {
  return (
    <div className="home">
      <Navbar />

      <main className="content">
        <Intro />
      </main>
    </div>
  )
}

export default App

import './App.css'

function App() {
  return (
    <div className="home">
      <div className="navbar">
        <h1>Tommikiv</h1>

        <div className="nav-links">
          <a href="#">Feed</a>
          <a href="#">Projects</a>
          <a href="#">Who am i</a>
        </div>
      </div>
      <div className="content">
        <div className="intro">
          <h1>Focused on visually pleasing experiences while understanding the systems behind them.</h1>

          <div className="status">
            <div className="status-header">
              <h2>* NOW</h2>
              <button>Github</button>
              <button>LinkedIn</button>
            </div>
            <p>Studying software engineering at Tampere University of Applied Sciences while working on various projects.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

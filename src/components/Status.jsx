export default function Status() {
    return (
        <div className="status">
            <div className="status-header">
                <h2>* NOW</h2>
                <button onClick={() => window.open('https://github.com/tommikiv', '_blank')}>Github</button>
                <button onClick={() => window.open('https://www.linkedin.com/in/tommikivikangas/', '_blank')}>LinkedIn</button>
            </div>

            <p>
                Studying software engineering at Tampere University of Applied Sciences
                while working on various projects.
            </p>
        </div>
    )
}
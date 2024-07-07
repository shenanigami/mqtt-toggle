import { useState } from 'react'
import './App.css'


function App() {
  const [toggled, setToggled] = useState(false);
  return (
    <div className="App">
      <button className={`toggle-btn ${toggled ? 'toggled' : ""}`}
      onClick={() => setToggled(!toggled)}>
      <div className="thumb"></div>
      </button>
    </div>
  );
}

export default App

import { useState } from 'react'
import './App.css'
import mqtt from "mqtt";

var client = null

function App() {
  const [toggled_cx, setToggled_cx] = useState(false);
  const [toggled_pubsub, setToggled_pubsub] = useState(false);

  return (
    <div className="App">
      <button className={`toggle-btn-connection ${toggled_cx ? 'toggled_cx' : ""}`}
      onClick={() => {
        setToggled_cx(!toggled_cx)
        if (!toggled_cx === true) {
          client = mqtt.connect('ws://test.mosquitto.org:8080')
          console.log(`toggle is on`)
        } else if (!toggled_cx === false && !(client === null)) {
          client.end()
          console.log(`toggle is off`)
        }
      }}>
      <div className="thumb-connection"></div>
      </button>
      <button className={`toggle-btn-pubsub ${toggled_pubsub ? 'toggled_pubsub' : ""}`}
      onClick={() => setToggled_pubsub(!toggled_pubsub)}>
      <div className="thumb-pubsub"></div>
      </button>
    </div>
  );
}

export default App

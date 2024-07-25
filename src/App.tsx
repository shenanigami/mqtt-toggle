import { useState } from 'react'
import './App.css'
import mqtt from 'mqtt'

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
        // Synchronously emits all the parsed packets
        if (!(client === null)) {
            client.on('connect', connack => {
            console.log(connack)
            })
        }
       } else if (!toggled_cx === false && !(client === null)) {
          client.end()
          console.log(`toggle is off`)
          client.on('close', () => {
            console.log(`connection closed`)
          })
        }
      }}>
      <div className="thumb-connection"></div>
      </button>
      <button className={`toggle-btn-pubsub ${toggled_pubsub ? 'toggled_pubsub' : ""}`}
      onClick={() => {
        if (!(client === null) && client.connected) {
            setToggled_pubsub(!toggled_pubsub)
            if (!toggled_pubsub === true) {
                    client.subscribe("presence", (err) => {
                        if (!err) {
                        client.publish("presence", "Hello mqtt");
                        }
                    });
                    client.on("message", (topic, message) => {
                        // message is Buffer
                        console.log(message.toString());
                    });

            } else {
                client.unsubscribe("presence", (err) => {
                    if (!err) {
                        console.log("successfully unsubscribed!")
                    }
                });

            }
        }
      }}>
      <div className="thumb-pubsub"></div>
      </button>
    </div>
  );
}

export default App

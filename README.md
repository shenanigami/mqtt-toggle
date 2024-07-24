# What this project is about?

I want to learn more about MQTT protocol.

This project is based on https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/ project.

Basically have a webapp where I have led toggle which signals led on ESP32 to be turned on or off.
There's also temperature/humidity sensor, but one step at a time.

There are some modifications I'm planning to make though. First, no nodeRED - my goal is not to automate, but to learn. I know how to code.
That is not to say, I'll write everything from scratch. I'll heavily rely on other people's work and cite it accordingly. There are things 
that I'll write myself, or modify based on an example, or simply integrate, like mosquitto (trust me, middleware is not that sexy).

2024-07-07
- Create a toggle react app, following a [YT tutorial](https://youtu.be/6O_4p-H1-lY?t=95).

2024-07-08
- Make first toggle's toggle trigger connect/disconnect to mqtt broker. I used [mosquitto test broker](https://test.mosquitto.org/). Check for port and protocol.
 - For browsers, protocols can either be ws or wss (see [browser section](https://github.com/mqttjs/MQTT.js?tab=readme-ov-file#browser) of mqttjs github readme).
 - NOTE: mqtt broker instances that run over `mqtt://` can't be accessed from a browser (for later), according to this [mqttjs github issue thread](https://github.com/mqttjs/MQTT.js/issues/628).
- The added code is likely ugly and there are better ways to do what I did, but I'm a webapp noob, not yet sure if I need to invest in webapp writing skills
  beyond haphazard web searching.
- Removed src/components code (first attempt at toggle that failed).
- For the mqtt code, I used simple examples from [this](https://github.com/mqttjs/MQTT.js) mqttjs repo.

Some things I learned.
- `==` vs `===` in [this](https://stackoverflow.com/questions/5113374/javascript-check-if-variable-exists-is-defined-initialized) stackoverflow post (js).
- multiple statements syntax for arrow functions in js, [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
- also, had to use import instead of require, according to [mqttjs readme](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).


2024-07-24: After a bit of an odyssey, I stumbled upon the mqttjs's client api, specifically [event](https://github.com/mqttjs/MQTT.js?tab=readme-ov-file#event-connect) handling. For this latest commit, the goal was to get some sort of verification of successful connect/disconnect in forms of console logs. For connect, I was able to print the connack packet to the console, for disconnect I used the close event that occurs that is emitted after a disconnect.

Next: Deal with second toggle (pub-sub stuff).


## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

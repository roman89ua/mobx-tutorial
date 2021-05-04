import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import DevTools from "mobx-react-devtools";

class App extends Component{
    render () {
        return (
            <div className="App">
                {/*<DevTools />*/}
                <h1>Hello MobX with react</h1>
            </div>
        );
    }
}

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

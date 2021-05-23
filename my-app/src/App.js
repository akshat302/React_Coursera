import React, {Component} from 'react'
import './App.css';
import Main from './Components/MainComponent';
import { BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux'; //Provider Component allows me to configure my react application so that the redux store becomes available to all my components in react application
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

};
export default App;

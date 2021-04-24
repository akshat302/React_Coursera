import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes:DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Hello World</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /> {/* dishes made available as props to my MenuComponent */}
      </div>
    );
  }

};
export default App;

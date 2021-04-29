import React, {Component} from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from './DishdetailComponent';


class Main extends Component {

  constructor(props) {
    super(props);

    //state stores the properties related to the component which can be used later 
    this.state = {
      dishes:DISHES,
      selectedDish:null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish:dishId });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Hello World</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
          onClick = { (dishId) => this.onDishSelect(dishId) } /> {/* dishes made available as props to my MenuComponent */}
        <DishDetail 
          dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
      </div>
    );
  }

};

export default Main;

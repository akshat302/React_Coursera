import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Footer from './FooterComponent';


class Main extends Component {

  constructor(props) {
    super(props);

    //state stores the properties related to the component which can be used later 
    this.state = {
      dishes:DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS,
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish:dishId });
  // }

  render() {

    // Another Way to supply a component by explicitly declaring here
    // The first way is to pass it directly in the component as in Menu Component

    const HomePage = () => {

      return(
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    const DishWithId = ({match}) => {
      
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}  //match.params.dishId is a string which is converted to an integer with base 10
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          /> 
      )
    }

    return (
      <div>
        <Header />

        {/* Switch to enclose all our routes into our main component */}

        <Switch> 
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={ () => <Menu dishes={this.state.dishes} /> } />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={ () => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" /> 
        </Switch>
 
        <Footer />
      </div>
      
    );
  }

};

export default Main;

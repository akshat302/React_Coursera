import React, {Component} from 'react';
import {Card, CardBody, CardImgOverlay, CardImg, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {

        super(props)

        this.state = {

        }
    }

    renderDish(dish) {

        return (
            <Card key={dish.id}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />

                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }

    renderComments(comments) {

        if(comments == null) {
            return (<div></div>)
        }

        const cmnt = comments.map(comment => {

                return (
                    <div  id={comment.id}>
                            
                            <p>{comment.comment}</p>
                            <p>-- {comment.author}, 
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year:'numeric',
                                month:'long',
                                day:'2-digit',
                                timeZone:'Asia/Kolkata'
                            }).format(new Date(comment.date))}
                            </p>   
                    </div>
                    
                )    
            })        

        return (
            <div className="col-12 col-md-5 m-1">
                    <header><h4>Comments</h4></header>
                    {cmnt}        
            </div>
            
        )

    };

    render() {

        const dishdetail = this.props.dish;

        if(dishdetail != null) {

            
            return(

                <div className="container">
                    <div className='row'>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dishdetail)}
                        </div>
                        
                        {this.renderComments(dishdetail.comments)}
                        
                    </div>                    
                </div>
                
            )
        }

        else {

            return (

                <div></div>
            )
        }
        
    }
}

export default DishDetail
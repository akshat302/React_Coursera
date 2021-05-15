import React from 'react';
import {Card, CardBody, CardImgOverlay, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {

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

function RenderComments({ comments }) {

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

const DishDetail = (props) =>   {

        const dishdetail = props.dish;

        if(dishdetail != null) {
      
            return(

                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{dishdetail.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{dishdetail.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={dishdetail} />
                        </div>
                        
                        <RenderComments comments={props.comments} />
                        
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


export default DishDetail
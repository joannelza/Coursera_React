import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);

    }

    renderDish(dish){
        if(this.props.dish!=null){
            return(
                  
                <Card >

                   <CardImg src={dish.image} alt={dish.name} />
                   <CardBody>
                   <CardTitle>{dish.name}</CardTitle>
                   <CardText>{dish.description}</CardText>
                   </CardBody>
                </Card> 
            )
        }

        else {
            return(
                <div></div>
            )
        }
    }

    renderComments(comments){
        if(comments==null){
           return <div></div>
        }
        else 
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return(
                                <div>
                                    <li>{comment.comment}</li>
                                    <li>--{comment.author}, {comment.date}</li>
                                </div>
                                )
                            }
                        )}
                </ul>
            </div>
        )
    }

render(){
    if(this.props.dish==null){
        return <div></div>
    }
    else 
    return(
        <div className="container">
            <div className="row ">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        </div>
    )
}
}

export default Dishdetail;
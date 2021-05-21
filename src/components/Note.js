import React from 'react';
import {Card} from 'react-bootstrap';
import $ from 'jquery';


export default class Note extends React.Component{

    constructor(props){
        super();
        this.props=props;
    }

    toggleClasses = () =>{
        $('.card').on('mouseenter mouseleave', function(){
            $(this).toggleClass('shadow');
        });
    }

    componentDidMount(){
        this.toggleClasses();
    }

    render() {
        return (
        <Card key={this.props.note.id}>
            <Card.Img variant='top' src={this.props.note.img} alt=' '/>
            <Card.Body>
                <Card.Title>{this.props.note.title}</Card.Title>
                <Card.Text>{this.props.note.description}</Card.Text>
            </Card.Body>
        </Card>
    );
    }
}

    



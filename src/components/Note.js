import React from 'react';
import {Card} from 'react-bootstrap';
import $ from 'jquery';
import DeleteButton from './DeleteButton';


export default class Note extends React.Component{

    constructor(props){
        super();
        this.props=props;
    }

    toggleClassesAndButtons = () =>{
        $('.card').on('mouseenter mouseleave', function(){
            $(this).toggleClass('shadow shadow-lg');
            $(this).find('button').toggle();
        });
    }

    componentDidMount(){
        this.toggleClassesAndButtons();
    }

    render() {
        return (
        <Card key={this.props.note.id}>
            <Card.Img variant='top' src={this.props.note.img} alt=' '/>
            <Card.Body>
                <Card.Title>{this.props.note.title}</Card.Title>
                <Card.Text>{this.props.note.description}</Card.Text>
                <DeleteButton/>
                <br/>
            </Card.Body>
        </Card>
    );
    }
}

    



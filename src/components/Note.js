import React from 'react';
import {Card} from 'react-bootstrap';
import $ from 'jquery';
import DeleteButton from './DeleteButton';
import {BsTrashFill} from 'react-icons/bs';


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
                <DeleteButton id={this.props.note.id} onDelete={this.props.onDelete}/>
                {/* <button onClick={() => this.props.onDelete(this.props.id)} className='border border-secondary rounded-lg float-right bg-white' style={{display:'None', visibility:'invisible', transition:"0.5s", border: '5px'}}><BsTrashFill fontSize="20px"/></button> */}
                <br/>
            </Card.Body>
        </Card>
    );
    }
}

    



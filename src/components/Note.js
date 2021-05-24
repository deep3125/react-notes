import React from 'react';
import {Card} from 'react-bootstrap';
import $ from 'jquery';
import DeleteButton from './DeleteButton';


const Note = (props) => {

    const toggleClassesAndButtons = (id) =>{
        $('#' + id).toggleClass('shadow shadow-lg');
        $('#' + id).find('button').toggle();
    }

    return (
        <Card key={props.note.id} id={props.note.id} onMouseEnter={() => toggleClassesAndButtons(props.note.id)} onMouseLeave={() => toggleClassesAndButtons(props.note.id)}>
            <Card.Img variant='top' src={props.note.img} alt=' '/>
            <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{'__html': props.note.title}}></Card.Title>
                <Card.Text dangerouslySetInnerHTML={{'__html': props.note.description}}></Card.Text>
                <DeleteButton id={props.note.id} onDelete={props.onDelete}/>
                <br/>
            </Card.Body>
        </Card>
    );
    
}

export default Note;   



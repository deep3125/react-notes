import { Form, Button, FormControl } from 'react-bootstrap';

const AddTask = ()=>{
    return (
        <Form className='w-20 mx-auto'>
            <input type='Title' placeholder='something' className='w-20'></input>
            <FormControl type='text' placeholder='search' className='w-20'></FormControl>
            <input type='url' placeholder='search' ></input>
            <Button type='submit' className='invisible'></Button>
        </Form>
    );
}

export default AddTask;
import { BsList } from 'react-icons/bs';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';



const Header = ()=>{
    return (
        <div>
            <Navbar>
                <BsList style={{fontSize: '30px'}} ></BsList>
                <Form inline className='w-50 mx-auto'>
                    <FormControl type='text' placeholder='search' className='w-100'></FormControl>
                    <Button type='submit' className='invisible'></Button>
                </Form>
                <Button className='btn-secondary rounded'>Logout</Button>
            </Navbar>
            <hr/>
        </div>
    
    );
}

export default Header;
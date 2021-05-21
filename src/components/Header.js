import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import $ from 'jquery';


const Header = ()=>{

    const ToggleSlider = ()=>{
        if ($('.Slider').width()>0){
            $('.Slider').animate({width: '0px'}, 500);
        }
        else{
            var wid = $(window).width();
            var per = 0;
            var slider_wid = 0;
            if (wid<=544)
                per = 80;
            else if (wid<=768)
                per = 50
            else if (wid<=992)
                per = 35
            else 
                per = 20

            slider_wid = wid * per/100;
            $('.Slider').animate({width: slider_wid}, 500);
        }
    }

    return (
        <div>
            <Navbar>
                <Button className='bg-white text-dark border-light shadow-sm' style={{fontSize: '25px'}} onClick={ToggleSlider} >&#9776;</Button>
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
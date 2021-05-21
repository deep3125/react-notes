import {Button} from 'react-bootstrap';
import $ from 'jquery';


const Slider = ()=>{

    const HideSlider = ()=>{
        $('.Slider').animate({width: '0%'}, 500);
    }

    return (
        <>
            <Button className='text-light text-right bg-secondary border-0 w-100 m-1 p-3' onClick={HideSlider} style={{fontSize:'30px'}}>&times;</Button>
            <Button className='text-light text-left bg-secondary border-0 w-100 m-1 p-3' style={{fontSize:'20px'}}>dskjfiwe</Button>
            <Button className='text-light text-left bg-secondary border-0 w-100 m-1 p-3' style={{fontSize:'20px'}}>dskjfiwe</Button>
            <Button className='text-light text-left bg-secondary border-0 w-100 m-1 p-3' style={{fontSize:'20px'}}>dskjfiwe</Button>
            <Button className='text-light text-left bg-secondary border-0 w-100 m-1 p-3' style={{fontSize:'20px'}}>dskjfiwe</Button>
            <Button className='text-light text-left bg-secondary border-0 w-100 m-1 p-3' style={{fontSize:'20px'}}>dskjfiwe</Button>
        </>
    );
}


export default Slider;
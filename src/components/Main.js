import AddTask from './AddTask';
import Notes from './Notes';
import Slider from './Slider';


const Main = (props)=>{
    return(
        <div className='Main'>
            {/* <div className='AddTask'>
                <AddTask></AddTask>
            </div><br/><br/> */}
            <div>
                <div className='Slider h-100 bg-secondary' style={{ position: 'fixed', width:'0', overflowX: 'hidden', zIndex:1}}>
                    <Slider></Slider>
                </div>
                <div className='notes'>
                    <Notes notes={props.notes}></Notes>
                </div>
            </div>
            
        </div>
    );
}

export default Main;
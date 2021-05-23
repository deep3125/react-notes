import AddNotes from './AddNotes';
import Notes from './Notes';
import OpenBrowser from './OpenBrowser';
import Slider from './Slider';

const Main = (props)=>{
    return(
        <div className='Main'>
            <div style={{width:"100%"}}>
                <AddNotes onAdd={props.addNewNote}></AddNotes>
            </div><br/><br/>
            <div>
                <div className='Slider h-100 bg-secondary' style={{ position: 'fixed', width:'0', overflowX: 'hidden', zIndex:1}}>
                    <Slider></Slider>
                </div>
                <div className='notes'>
                    <Notes notes={props.notes}></Notes>
                    
                </div>
                <OpenBrowser></OpenBrowser>
            </div>
            
        </div>
    );
}

export default Main;
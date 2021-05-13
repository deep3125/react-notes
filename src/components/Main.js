import AddTask from './AddTask';
import Notes from './Notes';


const Main = (props)=>{
    return(
        <div className='Main'>
            <div className='AddTask'>
                <AddTask></AddTask>
            </div><br/><br/>
            <div className='notes'>
                <Notes notes={props.notes}></Notes>
            </div>
        </div>
    );
}

export default Main;
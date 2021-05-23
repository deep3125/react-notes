import { useState } from 'react';
import $ from 'jquery';

const AddNotes = (props)=>{

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
	
	const G = ()=>{
    $('#m2').fadeIn();
		$('#m1').toggle();
	}
	const X = ()=>{
    $('#m1').fadeIn();
		$('#m2').toggle();
	}

  const on_Submition = (e) =>{
    e.preventDefault();
    props.onAdd({
      img: url,
      title: title,
      description: description,
    });

    

    setTitle('')
    setDescription('')
    setUrl('')

  }



    return (
      <div id='AddNotes' className="mx-auto shadow shadow-sm border border-1 rounded">
        <div id="m2" style={{visibility:'visible', display:'None'}}>
          <form id='addtask' href='#' onSubmit={on_Submition} style={{padding:"0px"}} className="mx-auto border border-1 rounded text-secondary"
           style={{width:"100%", height:"100%"}}>
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' style={{width:"100%", outline:"None"}} className="border border-0 text-secondary"></input><br/>
            <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} htmlFor='addtask' placeholder='Description' rows="5" style={{width:"100%", outline:"None"}} className="border border-0 text-secondary"></textarea><br/>
            <input type='url' value={url} onChange={(e) => setUrl(e.target.value)} placeholder='Url' style={{width:"100%", outline:"None"}} className="border border-0 text-secondary"></input>
            <input type="submit" style={{visibility:'invisible', display:'None'}} className='hide'/>
          </form>
          <button onClick={X} style={{width:"100%", height:"30px", outline:"None"}} className="border border-0 text-secondary">Close</button>
        </div>	
          
        <div onClick={G} id="m1" style={{width:"100%", height:"35px"}}>
            <div className="mx-auto  text-secondary align-middle" style={{width:"100%", height:"100%"}}>Take Notes</div>
        </div>  

      </div>
	
);	}

export default AddNotes;
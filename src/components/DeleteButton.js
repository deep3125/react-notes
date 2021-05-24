import {BsTrashFill} from 'react-icons/bs';

const DeleteButton = (props)=>{
    return (
        <button onClick={() => props.onDelete(props.id)} className='border border-secondary rounded-lg float-right bg-white' style={{display:'None', visibility:'invisible', transition:"0.5s", border: '5px'}}><BsTrashFill fontSize="20px"/></button>
    );
}

export default DeleteButton;
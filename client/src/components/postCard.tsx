import { CSSProperties } from "react";
import Delete from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';

 interface Props {}

export default function PostCard() {
   
  return (
      <>
    <div style={cardStyle}>
        <p style={userNameStyle}>
        </p>
        <p style={post}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur in aliquam ipsum reprehenderit minus nihil aut accusantium temporibus ea, praesentium</p>
       <div style={Icons}>
       <Delete style={DeleteIcon}/>
       <EditIcon />
     </div>
    </div>  
    
    <div style={cardStyle}>
        <p style={userNameStyle}></p>
        <p style={post}></p>
    </div>
    </>
  )  

}

const cardStyle: CSSProperties = {
    height: '8rem',
    width: '100%',
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    backgroundColor: '#2D2D2D',
    color: 'white',
}

const userNameStyle: CSSProperties = {
    marginTop: '1rem',
    color: 'white',
    fontSize: '1rem',

};

const post: CSSProperties = {
    color: 'white',
    fontSize: '1rem',
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

};


const Icons: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    margin: '1rem;'
    
};
const DeleteIcon: CSSProperties = {

}
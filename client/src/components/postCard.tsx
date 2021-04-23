import { CSSProperties } from "react"

 interface Props {
     userPost: []
 }

export default function postCard(props: Props) {
   
  return (
    <div style={cardStyle}>
        
        <p style={userNameStyle}></p>
        <p style={post}></p>

    </div>  
  )  

}

const cardStyle: CSSProperties = {
    height: '10rem',
    width: '80rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    backgroundColor: '#2D2D2D',
    color: 'white',
}

const userNameStyle: CSSProperties = {
    color: 'white',
    fontSize: '1rem'
}

const post: CSSProperties = {
    color: 'white',
    fontSize: '0.8rem',

}
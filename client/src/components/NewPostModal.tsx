import { CSSProperties } from "@material-ui/styles"

interface Props {
    setModalIsVisible: (value: React.SetStateAction<boolean>) => void; 
   
}

export default function NewPostModal(props: Props) {
  function handleChange(value: string) {
    console.log(value);
  }
    return (
        <div style={modalContainer}> 
        <div style={buttonContainer}>
           <button onClick={() => props.setModalIsVisible(false)} style={closeButton}>Avbryt</button>¨
           <button style={modalButtons}>Posta</button>
        </div>
        <textarea 
        placeholder={"Vad händer?"}
        style={textArea} rows= {5} 
        onChange={(event) => handleChange(event.target.value)}>
         </textarea> 
        </div> 
        
    )
}

const textArea: CSSProperties = {
    width: '100%',
    height: '10rem',
    border: '0, 0.3rem, 0, 0 solid black',
    fontSize: '0.9rem',
}

const modalContainer: CSSProperties = {
    position: 'absolute',
    height: '12rem',
    width: '100%',
    background: 'white',
    
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

}

const buttonContainer: CSSProperties = {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: '0.5rem',
}

const modalButtons: CSSProperties = {
    backgroundColor: '#4780EE',
    color: '#ffff',
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "0.9rem",
    fontWeight: 600,
    margin: '0.3rem',
    width: '7rem',
    height: '2rem',

    alignItems: 'center',
    justifyContent:'center',

}

const closeButton: CSSProperties = {
    border: 'none',
    color: '#4780EE',
    background: 'white',
    textDecoration: 'underline',
}


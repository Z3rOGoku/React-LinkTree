import React, {useState} from 'react'

export default function Card(props) {
  
  const handleOnClick = () => {
    // Assuming `props.link` contains the URL you want to navigate to
    if (props.link) {
      window.open(props.link, '_blank');
    }else{
      setText("HARE KRISHAN#ZERO")
    }
  };
  
  const [text,setText] = useState(props.title);
  
  

  return (

    <>
        <div className="card" onClick={handleOnClick}>
            <h2>{text}</h2>
            <div className="container">
              <img src={props.img} alt="" />
            </div>
            
        </div>
    
    </>
  )
}

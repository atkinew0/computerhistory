
import {useState} from 'react'

export default function Video(props){

  const [showDesc,setShowDesc] = useState(false)

  function toggle(){
    showDesc ? setShowDesc(false) : setShowDesc(true)
  }

    return (
        <div className="card">
            <h3>{props.details.title}</h3>
            <p><span onClick={toggle}>{showDesc? props.details.description : props.details.description.substr(0,150)+"..." }</span></p>
            <span>Score:{props.details.score}</span>
        </div>
    )




}
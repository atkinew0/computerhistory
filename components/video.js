
import {useState} from 'react'
import { router, useRouter } from 'next/router'

export default function Video(props){

  const router = useRouter();

  const [showDesc,setShowDesc] = useState(false)

  function goTo(){
    //use Next js programmatic navigation to go to the specific video page
    router.push(`/videos/${props.details.id}`);
  }

  function toggle(){
    showDesc ? setShowDesc(false) : setShowDesc(true)
  }

    return (
        <div onClick={goTo} className="card">
          <h3>ID:{props.details.id}</h3>
            <h3>{props.details.title}</h3>
            <p><span onClick={toggle}>{showDesc? props.details.description : props.details.description.substr(0,150)+"..." }</span></p>
            <span>Score:{props.details.score}</span>
        </div>
    )




}
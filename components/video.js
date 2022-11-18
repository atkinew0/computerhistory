
import {useState} from 'react'
import { router, useRouter } from 'next/router'
import Rater from 'react-rater'
import StarRating from './StarRating'

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
        <div  className="entry">
          <div onClick={goTo}>
            <p className="title">{props.details.id} {props.details.title}</p>
            <p><span onClick={toggle}>{showDesc? props.details.description : props.details.description.substr(0,150)+"..." }</span></p>
            </div>
            <span>Score:<StarRating rating={props.details.scores.interestingCumulative/props.details.scores.totalVotes}/></span>
        </div>
    )




}
import { render } from 'react-dom'
import Video from './video'

export default function VideoList(props){

  

    function show(){

        console.log("showing props ",typeof props.videos, props.videos)
        
        if(props.videos){
            

            return props.videos.map((elem,index) => <li key={index}><Video details={elem}/></li>)

        }else{
            return <p>Loading</p>
        }
    }
   
    return (
      <div>
        <h1>Videolist</h1>
        {show()}
        
        
      </div>
    );


}
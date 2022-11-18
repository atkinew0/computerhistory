import { render } from 'react-dom'
import Video from './video'

export default function VideoList(props){

  

    function show(){

        
        if (props.videos) {
          return (
            <ul>
              {" "}
              {props.videos.map((elem, index) => (
                <li key={index}>
                  <Video details={elem} />
                </li>
              ))}
            </ul>
          );
        } else {
          return <p>Loading</p>;
        }
    }
   
    return (
      <div className="videolist">
        {show()}
        
        
      </div>
    );


}
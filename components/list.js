import { render } from 'react-dom'
import Video from './video'

export default function VideoList(props){

  

    function show(){

        
        if (props.videos) {
          let sorted = props.videos;
          sorted = sorted.sort((a,b) => {
            const scoreA = a.scores.totalVotes === 0 ? 0 :a.scores.interestingCumulative/a.scores.totalVotes;
            const scoreB = b.scores.totalVotes === 0 ? 0: b.scores.interestingCumulative/b.scores.totalVotes;
            return scoreB - scoreA;
          })



          return (
            <ul>
              {" "}
              {sorted.map((elem, index) => (
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
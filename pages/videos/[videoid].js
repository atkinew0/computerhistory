 import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react';
import { onValue,ref, set } from 'firebase/database'
import {db} from '../../firebase';
 
 function Specific(){
    const router = useRouter();
    const [item,setItem] = useState();
    const interestingRef = useRef();
    const informativeRef = useRef();


    useEffect(() => {

        const vid = ref(db, `${router.query.videoid}`);

        onValue(vid, snapshot => {
            
            const data = snapshot.val();
            console.log("Ues effect got item ",data)
            if(data !== null){
              setItem(data)
            }
          })

    },[])

    function sendVotes(item, score1, score2){

        let {interestingCumulative, informativeCumulative, totalVotes} = item.scores;

        

        set(ref(db, `${router.query.videoid}/scores`), {
            interestingCumulative: interestingCumulative + score1,
            informativeCumulative: informativeCumulative + score2,
            totalVotes: totalVotes + 1
    
        })

        
    
       
    
    
      }
    

    function handleSubmit(e){
        e.preventDefault()
        console.log("Submitting",+interestingRef.current.value, +informativeRef.current.value)

        sendVotes(item, +interestingRef.current.value, +informativeRef.current.value);
    }

    function show(){
        if(item){
            return (
                <div>
                <div className="card">
                  <h3>ID:{item.id}</h3>
                  <h3>{item.title}</h3>
                  <p>
                    <span>{item.description}</span>
                    
                  </p>
                  <h3><a href={item.link}>{item.link}</a></h3>
                  <div>
                  <span>Score: </span>
                    <span>Interesting: {(+item.scores.interestingCumulative/(item.scores.totalVotes === 0 ? 1: +item.scores.totalVotes)).toFixed(1)}</span>
                    <span> Informative: {(+item.scores.informativeCumulative/(item.scores.totalVotes === 0 ? 1: +item.scores.totalVotes)).toFixed(1)}</span>

                  </div>
                  
                  <div>
                  <span>Vote:{item.score}</span>
                  <form onSubmit={handleSubmit}>
                  <label for="Interesting">Interesting: </label>
                  <select name="Interesting" ref={interestingRef}>
                  
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                 </select>
                 <label for="Informative">Informative: </label>
                 <select name="Informative" ref={informativeRef}>
                
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                 </select>
                 <input type="submit" />
                  </form>
               
                  </div>
                </div>
              </div>
            )
        }else{
            return (
                <div>Loading</div>
            )
        }
    }


    return (
        show()
    )




 }

 export default Specific;
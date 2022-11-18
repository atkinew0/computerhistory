 import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react';
import { onValue,ref, set } from 'firebase/database'
import {db} from '../../firebase';
import StarRating from '../../components/StarRating'
 
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

    const sendVotes = (score) => {

       

        
            
            set(ref(db, `${router.query.videoid}/scores`), {
              interestingCumulative: item.scores.interestingCumulative + score,
              informativeCumulative: item.scores.informativeCumulative + score,
              totalVotes: item.scores.totalVotes + 1
            })
          


          
       
    
      }
    

    // function handleSubmit(e){
    //     e.preventDefault()
    //     console.log("Submitting",+interestingRef.current.value, +informativeRef.current.value)

    //     sendVotes(item, +interestingRef.current.value, +informativeRef.current.value);
    // }

    function show(){
        if(item){
            return (
                
                <div className="card">
                  <h3>ID:{item.id}</h3>
                  <h3>{item.title}</h3>
                  <p>
                    <span>{item.description}</span>
                    
                  </p>
                  <h3><a href={item.link}>{item.link}</a></h3>
                  <div>
                  <span>Score:<StarRating  rating={Math.floor(item.scores.interestingCumulative/item.scores.totalVotes)} send={sendVotes} /></span>
                   

                  </div>
                  
                  <div>
                
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
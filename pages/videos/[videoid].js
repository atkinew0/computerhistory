import { useRouter } from 'next/router'
import Image from 'next/image'
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
            if(data !== null){
              setItem(data)
            }
          })

    },[])

    const sendVotes = (score) => {
            
            console.log("Voting ",score,"for video which is scored currently", item.scores.totalVotes === 0 ? 0 :item.scores.interestingCumulative/item.scores.totalVotes)

            set(ref(db, `${router.query.videoid}/scores`), {
              interestingCumulative: item.scores.interestingCumulative + score,
              informativeCumulative: item.scores.informativeCumulative + score,
              totalVotes: item.scores.totalVotes + 1
            })
        
       
      }
    

  

    function show(){
        if(item){

            let videoId = item.link.substring(item.link.indexOf("v=") + 2);

            return (
                
                <div className="card">
            console.log("Ues effect got item ",data)
                  <h3>ID:{item.id}</h3>
                  <h3>{item.title}</h3>
                  <Image alt="youtube thumbnail link"  height="360px" width="480px" fill src={`https://img.youtube.com/vi/${videoId}/0.jpg`} />
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
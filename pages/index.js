import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import VideoList from '../components/list'

export default function Home() {

  const [videoData,setVideoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/db');

      console.log("In effect type of axios result data is ",typeof result.data)
    setVideoData(JSON.parse(result.data))
    }
    fetchData()

  }, [] );



 

  return (
   <div>
    <VideoList videos={videoData}/>
   </div>
  )
}

// export async function getStaticProps(){

//   const data = await fetch('/api/db');
//   const processed = await data.json()

//   return processed;


// }

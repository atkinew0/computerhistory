import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {

  const [data,setData] = useState();

  useEffect(()=> {
    async function fetchData(){

      const data = await fetch('/api/db');
      const processed = await data.json()
    
      setData(processed)

    }
    fetchData()

  }, [])



  return (
   <div>
    <p>
      {data}
    </p>
   </div>
  )
}

// export async function getStaticProps(){

//   const data = await fetch('/api/db');
//   const processed = await data.json()

//   return processed;


// }

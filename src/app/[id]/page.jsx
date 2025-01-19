import React from 'react'

const jsonData=async(id)=>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data=res.json()
    return data
}


// adding meta data

export async function generateMetadata({ params }) {
  // read route params
  const {id} =  await params
 
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  return {
    title:  `id:${id}`,
  }
  // optionally access and extend (rather than replace) parent metadata
 }




const appPageDynamic = async({params}) => {
    const {id}=await params
   const {title,body}=await jsonData(id)

    // console.log("checking params",params)
    
  return (
    <div className='p-10 border m-4'>

        <h4>id:{id}</h4>
        <p>title:{title}</p>
        <p>body:{body}</p>
    </div>
  )
}

export default appPageDynamic
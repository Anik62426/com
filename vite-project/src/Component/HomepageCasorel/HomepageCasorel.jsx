import React from 'react'
import coursel from "../assets/coursel.jpg"

function HomepageCasorel() {
  return (
    <>
    

<div className=" flex rounded-sm w-full p-2" > 
    
    <div className="h-56 visible overflow-hidden rounded-lg min-[320px]:h-0 sm:h-full">       
            <img src={coursel} className=" block w-full" alt="..."/>      
    </div>
</div>

    </>
  )
}

export default HomepageCasorel
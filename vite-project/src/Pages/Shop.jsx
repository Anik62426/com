import React from 'react'
import NewCollection from '../Component/NewCollection/NewCollection'
import Footer from '../Component/Footer/Footer'
import HomepageCasorel from '../Component/HomepageCasorel/HomepageCasorel'
import PopularWomen from '../Component/NewCollection/PopularWomen'

const Shop = () => {
  return (
    <div>    
       <HomepageCasorel/>
       <PopularWomen/>
        <NewCollection/>
        <Footer/>
    </div>
  )
}

export default Shop
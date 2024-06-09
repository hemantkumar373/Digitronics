import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
const Shop=()=>{
    return (
        <div>
            <Hero/>
            <Popular/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}
export default Shop
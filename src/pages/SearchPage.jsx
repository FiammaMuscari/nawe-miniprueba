
import React from 'react'
import { Discover } from '../components/Discover'
import { Buttons } from '../components/Buttons'

export const SearchPage = () => {
  return (
    <div style={{backgroundColor:'white'}}>
        <hr style={{margin:'1rem', border:'none', height:'1px', backgroundColor:'#d9d9d9'}}/>
        <Buttons/>
        <Discover/>
    </div>
  )
}

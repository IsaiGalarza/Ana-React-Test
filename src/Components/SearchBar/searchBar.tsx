import React from 'react'
import './styles.scss'
import search from '../../Images/search.png'
import filter from '../../Images/filter.png'

export default function SearchBar() {
  return (
    // Search Bar Component
    <div className='searchBar-content d-flex justify-content-between'>
      <div className='form-group has-search'>
        <img src={search} className='form-control-feedback m-2' alt='search' />
        <input type='text' className='form-control searchBox' placeholder='Search experience' />
      </div>
      <div className='d-flex align-items-center'>
        <img src={filter} alt='filter' />
      </div>
    </div>
  )
}
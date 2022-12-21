import React from 'react'
import SavedShows from '../Components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
          className=" w-full h-[400px] object-cpver"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d0a0affb-1c76-4cf0-9d75-eb531f32458c/9bcbc4ce-d902-406c-9174-1d5110df805d/SG-en-20221214-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Image"
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
        </div>
    </div>
    <SavedShows/>
    </>
  )
}

export default Account
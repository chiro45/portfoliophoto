import React from 'react'
import { GalleryElement } from '../galleryElement/GalleryElement'
import { NavBarGallery } from '../navBar/NavBarGallery'


export const GalleryScreen = () => {
  return (
    <div className='galleryScreen__container'>
        <NavBarGallery/>

        <GalleryElement/>
    </div>
  )
}

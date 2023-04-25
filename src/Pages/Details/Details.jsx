import React from 'react'
import TourDetails from '../../components/TourDetails/TourDetails'
import Reviews from '../../components/Reviews/Reviews'
import MightLike from '../../components/MightLike/MightLike'
import TravelGallery from '../../components/TravelGallery/TravelGallery'
import Header from '../../components/Header/Header'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

function Details() {
  return (
    <div>
      <Header/>
      <Breadcrumb/>
      <TravelGallery />
      <TourDetails />
      <Reviews />
      <MightLike />
    </div>
  )
}

export default Details
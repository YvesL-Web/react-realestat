import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'


function Listing({ listing }) {

   return (
      <div className="card listing-preview">
         <img className="card-img-top" src={listing.photo_main} alt="" />
         <div className="card-img-overlay">
            <h2>
               <span className="badge badge-secondary text-dark">
                  ${listing.price}
               </span>
            </h2>
         </div>

         <div className="card-body">
            <div className="listing-heading text-center">
               <h4 className="">
                  {listing.title}
               </h4>
               <p>
                  <i className="fas fa-map-marker text-secondary"> </i> {listing.city} {listing.state}, {listing.zipcode}
               </p>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
               <div className="col-6">
                  <i className="fas fa-th-large"></i> Sqft: {listing.sqft}
               </div>
               <div className="col-6">
                  <i className="fas fa-car"></i> Garage: {listing.garage}
               </div>
            </div>
            <div className="row py-2 text-secondary">
               <div className="col-6">
                  <i className="fas fa-bed"></i> Bedrooms: {listing.bedrooms}
               </div>
               <div className="col-6">
                  <i className="fas fa-bath"></i> Bathrooms: {listing.badrooms}
               </div>
            </div>
            <hr />
            <div className="row py-2 text-secondary">
               <div className="col-6">
                  <i className="fa-sharp fa-solid fa-user-tie"></i> {listing.agent}
               </div>
            </div>
            <div className="row text-secondary pb-2">
               <div className="col-6">
                  <i className="fas fa-clock"></i> {listing.list_date}
               </div>
            </div>
            <hr />
            <Link className="btn btn-primary btn-block" to={`/listing/${listing.id}`} >
               More Info
            </Link>

         </div>
      </div>
   )
}

export default Listing
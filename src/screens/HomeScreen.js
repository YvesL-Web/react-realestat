import React, { useState, useEffect } from 'react'
import Listing from '../components/Listing'
// import listings from '../listings'
import axios from 'axios'


function HomeScreen() {
   const [listings, setListings] = useState([])

   useEffect(() => {
      async function fetchListings() {
         const { data } = await axios.get('/api/')
         setListings(data)
      }
      fetchListings()

   }, [])

   return (
      <div>
         {/* Showcase  */}
         <section id="showcase">
            <div className="container text-center">
               <div className="home-search p-5">
                  <div className="overlay p-5">
                     <h1 className="display-4 mb-4">
                        Property Searching Just Got So Easy
                     </h1>
                     <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Recusandae quas, asperiores eveniet vel nostrum magnam
                        voluptatum tempore! Consectetur, id commodi!
                     </p>

                     <div className="search">
                        <form action="{% url 'listings:search' %}">
                           {/* Form Row 1  */}
                           <div className="form-row">
                              <div className="col-md-4 mb-3">
                                 <label className="sr-only">Keywords</label>
                                 <input type="text"
                                    name="keywords"
                                    className="form-control"
                                    placeholder="Keyword (Pool, Garage, etc)"
                                 />
                              </div>

                              <div className="col-md-4 mb-3">
                                 <label className="sr-only border">City</label>
                                 <input type="text" name="city" className="form-control" placeholder="City" />
                              </div>

                              <div className="col-md-4 mb-3">
                                 <label className="sr-only">State</label>
                                 <select name="state" className="form-select" defaultValue={true}>
                                    <option selected="true" disabled="disabled">State (All)</option>
                                    {/* {% for key,value in state_choices.items %} */}
                                    {/* <option value="{{key}}">{{value}}</option> */}
                                    {/* {% endfor %} */}
                                 </select>
                              </div>
                           </div>

                           {/* Form Row 2  */}
                           <div className="form-row">
                              <div className="col-md-6 mb-3">
                                 <label className="sr-only">Bedrooms</label>
                                 <select name="bedrooms" className="form-select">
                                    <option selected="true" disabled="disabled">Bedrooms (All)</option>
                                    {/* {% for key,value in bedroom_choices.items %} */}
                                    {/* <option value="{{key}}">{{value}}</option> */}
                                    {/* {% endfor %} */}
                                 </select>
                              </div>
                              <div className="col-md-6 mb-3">
                                 <select name="price" className="form-select" id="type">
                                    <option selected="true" disabled="disabled">Max Price (Any)</option>
                                    {/* {% for key,value in price_choices.items %} */}
                                    {/* <option value="{{key}}">{{value}}</option> */}
                                    {/* {% endfor %} */}
                                 </select>
                              </div>
                           </div>
                           <button id="boutton" className="btn btn-secondary btn-block mt-4" type="submit">
                              Submit form
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <br />
         {/* Alerts 
        {% include 'partials/_alerts.html' %}  */}

         {/* Listings  */}
         <section id="listings" className="py-5">
            {/* {% if listings %} */}
            <div className="container">
               <h3 className="text-center mb-3">Latest Listings</h3>
               <div className="row">
                  {listings.map(listing => (
                     <div className="col-md-6 col-lg-4 mb-4" key={listing.id}>
                        <Listing listing={listing} />
                     </div>
                  ))}
               </div>
            </div>
            {/* {% else %} */}
            <div className="col-md-12">
               <h2 className="text-center">No Listings Available</h2>
            </div>
            {/* {% endif %} */}
         </section>


         <br />
         {/* Our services */}
         <section id="services" className="py-5 bg-secondary text-white">
            <div className="container">
               <div id='text_service' className="row text-center">
                  <div className="col-md-4 z-index-2">
                     <i className="fas fa-comment fa-4x mr-4"></i>
                     <hr />
                     <h3>Consulting Services</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, debitis nam! Repudiandae, provident iste consequatur
                        hic dignissimos ratione ea quae.
                     </p>
                  </div>
                  <div className="col-md-4">
                     <i className="fas fa-home fa-4x mr-4"></i>
                     <hr />
                     <h3>Propery Management</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, debitis nam! Repudiandae, provident iste consequatur
                        hic dignissimos ratione ea quae.
                     </p>
                  </div>
                  <div className="col-md-4">
                     <i className="fas fa-suitcase fa-4x mr-4"></i>
                     <hr />
                     <h3>Renting & Selling</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Incidunt, debitis nam! Repudiandae, provident iste consequatur
                        hic dignissimos ratione ea quae.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default HomeScreen
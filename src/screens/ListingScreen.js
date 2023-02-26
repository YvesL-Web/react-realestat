import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


function ListingScreen() {

  const { id } = useParams()
  // const listing = listings.find((listing) => listing.id == listingId)
  const [listing, setListing] = useState([])

  useEffect(() => {
    async function fetchListing() {
      const { data } = await axios.get(`/api/${id}/`)
      console.log(data);
      setListing(data)
    }
    fetchListing()

  }, [])

  return (
    <div>
      {/* Breadcrumb */}
      <section id="bc" className="mt-3">
        <div className="container">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" ><i className="fa-solid fa-house" style={{ color: 'black' }}></i></Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="{% url 'listings:listings' %}" style={{ textDecoration: 'none' }}>Listings</Link>
              </li>
              <li className="breadcrumb-item active">{listing.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* listing */}
      <section id="listing" className="py-4">
        <div className="container">
          <Link to="/" className="btn btn-light mb-4">Back To Listings</Link>
          <div className="row">
            <div className="col-md-9">
              {/* Home Main Image */}
              <img src={listing.photo_main} alt="" className="img-main img-fluid mb-3" />

              {/* Thumbnails */}
              <div className="row mb-5 thumbs">

                {/* {% if listing.photo_1 %} */}
                <div className="col-md-2">
                  <Link href={listing.photo_1} data-lightbox="home-images">
                    <img src={listing.photo_1} alt="" className="img-fluid" />
                  </Link>
                </div>
                {/* {% endif %} */}

                {/* {% if listing.photo_2 %} */}
                <div className="col-md-2">
                  <Link href={listing.photo_2} data-lightbox="home-images">
                    <img src={listing.photo_2} alt="" className="img-fluid" />
                  </Link>
                </div>
                {/* {% endif %} */}

              </div>

              {/* Fields */}
              <div className="row mb-5 fields">
                <div className="col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item text-secondary">
                      <i className="fas fa-money-bill-alt"></i> Asking Price:
                      <span className="float-right">{listing.price}</span>
                    </li>
                    <li className="list-group-item text-secondary">
                      <i className="fas fa-bed"></i> Bedrooms:
                      <span className="float-right">{listing.bedrooms}</span>
                    </li>
                    <li className="list-group-item text-secondary">
                      <i className="fas fa-bath"></i> Bathrooms:
                      <span className="float-right">{listing.bathrooms}</span>
                    </li>
                    <li className="list-group-item text-secondary">
                      <i className="fas fa-car"></i> Garage:
                      <span className="float-right">{listing.garage}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item text-secondary">
                      <i className="fas fa-th-large"></i> Square Feet:
                      <span className="float-right">{listing.sqft}</span>
                    </li>
                    <li className="list-group-item text-secondary">
                      <i className="fas fa-square"></i> Lot Size:
                      <span className="float-right"> {listing.lot_size} Acres
                      </span>
                    </li>
                    <li className="list-group-item text-secondary">
                      <i className="fas fa-calendar"></i> listings Date:
                      <span className="float-right">{listing.list_date}</span>
                    </li>
                    <li className="list-group-item text-secondary">
                      <i className="fa-sharp fa-solid fa-user-tie"></i> Agent:
                      <span className="float-right">{listing.agent}
                      </span>
                    </li>


                  </ul>
                </div>
              </div>

              {/* Description */}
              <div className="row mb-5">
                <div className="col-md-12">
                  {listing.description}
                </div>
              </div>
            </div>

            {/* agent */}
            <div className="col-md-3">
              <div className="card mb-3">
                <img className="card-img-top" src="{listing.agent.photo}" alt="" />
                <div className="card-body">
                  <h5 className="card-title">Agent</h5>
                  <h6 className="text-secondary">{listing.agent}</h6>
                </div>
              </div>
              <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#inquiryModal">Make An Inquiry</button>
            </div>

          </div>
        </div>
      </section>

      {/* MOdal */}
      <div className="modal fade" id="inquiryModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="inquiryModalLabel">Make An Inquiry</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="{% url 'contacts:contact' %}" method="POST">
                {/* {% csrf_token %} */}
                {/* {% if user.is_authenticated %} */}
                <input type="hidden" name="user_id" value="{{user.id}}" />
                {/* {% else %} */}
                <input type="hidden" name="user_id" value="0" />
                {/* {% endif %} */}
                <input type="hidden" name="agent_email" value="{{listing.agent.email}}" />
                <input type="hidden" name="listing_id" value="{{listing.id}}" />
                <div className="form-group">
                  <label for="property_name" className="col-form-label">Property:</label>
                  <input id="property_name" readOnly="readonly" type="text" name="listing" className="form-control" value={listing.title} />
                </div>
                <div className="form-group">
                  <label for="name" className="col-form-label">Name:</label>
                  <input id="name" type="text" name="name" className="form-control"
                    // {% if user.is_authenticated%} value="{{ user.first_name }} {{ user.last_name }}" {% endif %} 
                    required />
                </div>
                <div className="form-group">
                  <label for="email" className="col-form-label">Email:</label>
                  <input id="email" type="email" name="email" className="form-control"
                    // {% if user.is_authenticated%} value="{{ user.email }}" {% endif %} 
                    required />
                </div>
                <div className="form-group">
                  <label for="phone" className="col-form-label">Phone:</label>
                  <input id="phone" type="text" name="phone" className="form-control" />
                </div>
                <div className="form-group">
                  <label for="message" className="col-form-label">Message:</label>
                  <textarea id="message" name="message" className="form-control"></textarea>
                </div>
                <hr />
                <input type="submit" value="Send" className="btn btn-block btn-success" />
                <input type="button" value="close" data-bs-dismiss="modal" className="btn btn-block btn-primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingScreen
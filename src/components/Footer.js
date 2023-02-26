import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function Footer() {
  return (
    <div>
      <footer>
        <Container>
          {/* <!-- Section: Links  --> */}
          <section className="bg-light">
            <div className=" text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary"></i>Maison du Sud
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Social
                  </h6>
                  <div className="social text-right">
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </div>
                </div>

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Contact</a>
                  </p>
                  <p>
                    <a href="{% url 'pages:about' %}" className="text-reset">About us</a>
                  </p>
                  
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="fas fa-home me-3 text-secondary"></i> The South place, 447663 Briltool</p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    yvesengoulou@yahoo.fr
                  </p>
                  <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-fax me-3 text-secondary"></i> + 01 234 567 88</p>
                </div>
                {/*  Grid column */}
              </div>
              {/* Grid row  */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}
          <Col className='text-center py-3'>Copyright &copy; Maison du Sud </Col>
        </Container>  
      </footer>
    </div>
  )
}

export default Footer
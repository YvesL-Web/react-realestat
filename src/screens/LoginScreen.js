import React from 'react'
import { Link } from 'react-router-dom'

function LoginScreen() {
    return (
        <div>
            <div className='container'>
                <div className=" mt-5">
                    <div className=" col-lg-5 bg-light m-auto rounded shadow-lg">
                        <h2 className=" text-center pt-3">Sign In</h2>
                        <p className="text-center">Don't have an account? <Link to="/register/">Create an account.</Link></p>
                        <form method='POST'>
                            {/* {% csrf_token %} */}
                            <div className="form-group ps-2 pe-2 mb-3">
                                <label for="email">Email address</label>
                                <input type="email" required name="email" className="form-control shadow-sm" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div className="form-group ps-2 pe-2 mb-3">
                                <label for="password">Password</label>
                                <input type="password" required name="password" className="form-control shadow-sm" id="password" placeholder="Password" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your password with anyone else.</small>
                            </div>

                            <div className="text-center">
                                <button className="btn btn-secondary btn-lg mb-3" type="button submit">
                                    Log In
                                </button>
                            </div>
                        </form>



                    </div>
                </div>

            </div>

        </div>
    )
}

export default LoginScreen
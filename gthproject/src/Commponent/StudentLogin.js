import React from 'react';

// import { Input, Ripple, initMDB } from "mdb-ui-kit";

// initMDB({ Input, Ripple });

const StudentLogin = () => {
    return (
        <>
            <div class="container mt-5">
                <div class="row bg-dark" style={{height:"600px",padding:"20px",color:"white"}}>

                    <form class="form">

                        <div class="row mb-4">
                            <div class="col">
                                <div data-mdb-input-init class="form-outline">
                                    <input type="text" id="form3Example1" class="form-control" placeholder='Enter First Name' />
                                    <label class="form-label" for="form3Example1">First name</label>
                                </div>
                            </div>
                            <div class="col">
                                <div data-mdb-input-init class="form-outline">
                                    <input type="text" id="form3Example2" class="form-control" placeholder='Enter Last Name' />
                                    <label class="form-label" for="form3Example2">Last name</label>
                                </div>
                            </div>
                            <div class="col">
                                <div data-mdb-input-init class="form-outline">
                                    <input type="text" id="form3Example1" class="form-control" placeholder='Enter Your Contact' />
                                    <label class="form-label" for="form3Example1">Contact</label>
                                </div>
                            </div>
                        
                        </div>

                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="email" id="form3Example3" class="form-control" placeholder='Enter Your Email'/>
                            <label class="form-label" for="form3Example3">Email</label>
                        </div>

                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="address" id="form3Example3" class="form-control" placeholder='Enter Your Address'/>
                            <label class="form-label" for="form3Example3">Address</label>
                        </div>

                        <div data-mdb-input-init class="form-outline mb-4">
                            <input type="message" id="form3Example4" class="form-control" placeholder='Write Your Message'/>
                            <label class="form-label" for="form3Example4">Message</label>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-4">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                            <label class="form-check-label" for="form2Example33">
                                Subscribe to our channel
                            </label>
                        </div>


                        <button data-mdb-ripple-init type="button" class="btn btn-primary btn-block mb-4">Sign up</button>


                        <div class="text-center">
                            <p>or sign up with:</p>
                            <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                                <i class="fab fa-facebook-f"></i>
                            </button>

                            <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                                <i class="fab fa-google"></i>
                            </button>

                            <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                                <i class="fab fa-twitter"></i>
                            </button>

                            <button data-mdb-ripple-init type="button" class="btn btn-secondary btn-floating mx-1">
                                <i class="fab fa-github"></i>
                            </button>
                        </div>
                    </form>


                </div>
            </div>

        

        </>
    )
}

export default StudentLogin

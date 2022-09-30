import React from 'react';
import logo from "../assets/logo2.png"
import 'bootstrap/dist/css/bootstrap.css';
import { InptStyle, RessourceStyle, LoginButton, Inspiration } from '../styles/tout';


const Register = () => {
    return (
        <div style={{ backgroundColor: "rgba(229, 229, 229, 1)", padding: "8%"  }}>

            <section class="vh-100" >

                <div class="container-fluid h-custom">


                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-8 col-lg-6 col-xl-5 " style={{ backgroundColor: "white", borderRadius: "50px", padding: "30px" }}>
                            <form >
                                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-center">
                                    <InptStyle >INPT</InptStyle>
                                    <RessourceStyle>Ressources</RessourceStyle>

                                </div>
                                <div class="form-outline mb-4" style={{ padding: "0" }}>
                                    <input type="text" id="form3Example3" class="form-control form-control-lg"
                                        placeholder="Enter your name" />

                                </div>
                                <div class="form-outline mb-4" style={{ padding: "10px" }}>
                                    <input type="email" id="form3Example3" class="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />

                                </div>


                                <div class="form-outline mb-4" style={{ padding: "10px" }}>
                                    <input type="password" id="form3Example4" class="form-control form-control-lg"
                                        placeholder="Enter password" />

                                </div>
                                <div class="form-outline mb-4" style={{ padding: "10px" }}>
                                    <input type="password" id="form3Example4" class="form-control form-control-lg"
                                        placeholder="repeat password" />

                                </div>


                                <div class="text-center text-lg-center mt-4 pt-2">
                                    <LoginButton>sign up</LoginButton>
                                    
                                </div>

                            </form>
                        </div>
                        <div class="col-md-5 col-lg-4 col-xl- offset-xl-3">
                            <img src={logo} class="img-fluid" alt='' />
                            <Inspiration >tired of looking for ressources?</Inspiration>
                        </div>

                    </div>

                </div>


            </section>

        </div>
    );
};

export default Register;
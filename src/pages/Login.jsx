import React from 'react';
import logo from "../assets/logo2.png"
import 'bootstrap/dist/css/bootstrap.css';
import { InptStyle ,RessourceStyle,LoginButton, Inspiration} from '../styles/tout';


const Login = () => {
    return (
      
        <div style={ {backgroundColor:"rgba(229, 229, 229, 1)", padding:"8%"}}>
           
            <section class="vh-100" >
        
                <div class="container-fluid h-custom">
                
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-5 col-lg-4 col-xl-">
                            <img src={logo}  class="img-fluid" alt=''/>
                            <Inspiration >tired of looking for ressources?</Inspiration>
                      
                        


                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-5 offset-xl-3"style={{backgroundColor:"white",borderRadius:"50px",padding:"30px" }}>
                            <form >
                                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-center">
                                    <InptStyle >INPT</InptStyle>
                                    <RessourceStyle>Ressources</RessourceStyle>
                      
                                </div>
                                <div class="form-outline mb-4" style={{padding:"10px"}}>
                                    <input type="email" id="form3Example3" class="form-control form-control-lg"
                                        placeholder="Enter a valid email address"/>
                                    
                                </div>


                                <div class="form-outline mb-3" style={{padding:"10px"}}>
                                    <input type="password" id="form3Example4"  class="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    
                                </div>

                                <div class="d-flex justify-content-center align-items-center" >

                                    <a href="#!"  style={{color:"#64B4CD"}} >Forgot password?</a>
                                </div>

                                <div class="text-center text-lg-center mt-4 pt-2">
                                    <LoginButton>Login</LoginButton>
                                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/Register"
                                        >Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                    
                </div>
              
               
            </section>
  
        </div>
        
    );
};

export default Login;
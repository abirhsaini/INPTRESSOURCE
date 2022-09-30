import React from 'react';
import logo from "../assets/logo2.png"
import 'bootstrap/dist/css/bootstrap.css';
import { InptStyle ,RessourceStyle} from '../styles/tout';


const Login = () => {
    return (
        /*
        <div style={ {backgroundColor:"rgba(229, 229, 229, 1)"}}>
            <Container >
                <Row className='justify-content-center'>
                    <Col md="9" lg='6'> <img src={logo} alt=''/></Col>
                    <Col> 
                        hi</Col>
                </Row>

            </Container>
        </div>
        */
        <div style={ {backgroundColor:"rgba(229, 229, 229, 1)", padding:"10%"}}>
           
            <section class="vh-100" >
        
                <div class="container-fluid h-custom">
                
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img src={logo}  class="img-fluid" alt=''/>


                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1"style={{backgroundColor:"white", width:"500px",borderRadius:"50px",padding:"30px" }}>
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

                                    <a href="#!" class="text-body" style={{color:"#64B4CD"}} >Forgot password?</a>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" class="btn btn-primary btn-lg"
                                    >Login</button>
                                    <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        class="link-danger">Register</a></p>
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
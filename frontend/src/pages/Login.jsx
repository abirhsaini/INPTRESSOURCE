import {React, useState} from 'react';
import logo from "../assets/logo2.png"
import 'bootstrap/dist/css/bootstrap.css';
import { InptStyle ,RessourceStyle,LoginButton, Inspiration} from '../styles/tout';
import axios from "axios"
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';




const Login = ({ setToken }) => {
    const navigate=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [islogged,setislogged] = useState(false)

   
    

    const handleSubmit=(e)=> {
        e.preventDefault()
        const register ={
            email:email,
            password:password,
        }

        
        axios.post("http://localhost:3001/api/v1/auth/",register)
        .then(reponse=>{
        setislogged(true)
        localStorage.setItem("islogged",islogged)    
        localStorage.setItem("token",reponse.data.user.token)

        console.log(localStorage.getItem("token"))
        navigate("/home")
        })
        .catch((err)=>{
      
            Swal.fire({
            text:"the email or password is incorrect",
            icon: "error",
            width: 400,
            heightAuto: false,
            confirmButtonColor: "#5095D6",

            confirmButtonText: "Ok!",
            })
        })

    }
    
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
                                    <input name={email} 
                                    type="email" 
                                    id="form3Example3" 
                                    class="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    onChange={(e)=>{setEmail(e.target.value)
                                        }}/>
                                    
                                </div>


                                <div class="form-outline mb-3" style={{padding:"10px"}}>
                                    <input type="password"
                                    name={password} 
                                    id="form3Example4"  
                                    class="form-control form-control-lg"
                                    placeholder="Enter password" 
                                    onChange={(e)=>{setPassword(e.target.value)}}/>
                                    
                                </div>

                                <div class="d-flex justify-content-center align-items-center" >

                                    <a href="#!"  style={{color:"#64B4CD"}} >Forgot password?</a>
                                </div>

                                <div class="text-center text-lg-center mt-4 pt-2">
                                    <LoginButton onClick={handleSubmit}>Login</LoginButton>
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default Login;
import React from 'react';
import logo from "../assets/logo2.png"
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import axios from "axios"
import Swal from 'sweetalert2';
import { InptStyle, RessourceStyle, LoginButton, Inspiration } from '../styles/tout';


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [niveau, setNiveau] = useState("");

    var error = "email is already used";


    const correctSubmit = () => {

        if (name === "" || email === "" || password === "" || conPassword === "" || niveau==="" ) {
            error = "Please provide all values"
        }
        if (password !== conPassword) {
            error = "votre mot de passe incorrecte"
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const register = {
            name: name,
            email: email,
            password: password,
            role:niveau
        }




        correctSubmit()
        axios.post("http://localhost:3001/api/v1/auth/register", register)
            .then(reponse => {
                console.log(reponse)
                Swal.fire({
                    title: "Compte créé",
                    text: "merci, votre compte a été créé",
                    icon: "success",
                    width: 400,
                    heightAuto: false,
                    confirmButtonColor: "#396FAD",

                    confirmButtonText: "Ok!",
                });
            })
            .catch((err) => {
                console.log(err)
                Swal.fire({
                    text: error,
                    icon: "error",
                    width: 400,
                    heightAuto: false,
                    confirmButtonColor: "#5095D6",

                    confirmButtonText: "Ok!",
                })
            })



    }
    return (
        <div style={{ backgroundColor: "rgba(229, 229, 229, 1)", padding: "8%" }}>

            <section class="vh-100" >

                <div class="container-fluid h-custom">


                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-8 col-lg-6 col-xl-5 " style={{ backgroundColor: "white", borderRadius: "50px", padding: "30px" }}>
                            <form >
                                <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-center">
                                    <InptStyle >INPT</InptStyle>
                                    <RessourceStyle>Ressources</RessourceStyle>

                                </div>
                                <div class="form-outline mb-4" >
                                    <input
                                        name={name}
                                        type="text"
                                        id="form3Example3"
                                        class="form-control form-control-lg"
                                        placeholder="Enter your name"
                                        onChange={(e) => { setName(e.target.value) }} />

                                </div>
                                <div class="form-outline mb-4" >
                                    <input
                                        name={email}
                                        type="email"
                                        id="form3Example3"
                                        class="form-control form-control-lg"
                                        placeholder="Enter a valid email address"
                                        onChange={(e) => { setEmail(e.target.value) }} />

                                </div>


                                <div class="form-outline mb-4">
                                    <input
                                        name={password}
                                        type="password"
                                        id="form3Example4"
                                        class="form-control form-control-lg"
                                        placeholder="Enter password"
                                        onChange={(e) => { setPassword(e.target.value) }} />

                                </div>
                                <div class="form-outline mb-4" >
                                    <input
                                        name={conPassword}
                                        type="password"
                                        id="form3Example4"
                                        class="form-control form-control-lg"
                                        placeholder="repeat password"
                                        onChange={(e) => { setConPassword(e.target.value) }}
                                    />

                                </div>
                                <div class="form-outline mb-4" >
                                    <select class="form-select" id="form3Example3" name={niveau} aria-label="Default select example" onChange={(e)=>{setNiveau(e.target.value)}}>
                                        <option selected>Open this select menu</option>
                                        <option value="1">INE1</option>
                                        <option value="2">INE2</option>
                                        <option value="3">INE3</option>
                                        <option value="4">LAUREAT</option>

                                    </select>
                                </div>

                                <div class="text-center text-lg-center mt-4 pt-2">
                                    <LoginButton onClick={handleSubmit}>sign up</LoginButton>

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
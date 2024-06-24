import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Registration = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [repeatpassword, setrepeatpassword] = useState("")

    const navigate = useNavigate();
    const obj = { name, email, password, repeatpassword }
    const Handlesubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8002/posts", obj)
            .then((response) => {
                console.log(response)
                navigate("/login")
            })
            .catch((error) => console.log(error))

    }
    return (
        <>
            <section onSubmit={Handlesubmit} class="vh-100 bg-image" style={{ backgroundColor: "blue" }}>

                <div class="mask d-flex align-items-center h-80 gradient-custom-3" >
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card" style={{ borderradius: "15px" }}>
                                    <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                                        <form >

                                            <div data-mdb-input-init class="form-outline mb-1">
                                                <input type="text" id="form3Example1cg" class="form-control form-control-lg" value={name} onChange={(event) => setname(event.target.value)} />
                                                <label class="form-label" for="form3Example1cg">Your Name</label>
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-1">
                                                <input type="email" id="form3Example3cg" class="form-control form-control-lg" value={email} onChange={(event) => setemail(event.target.value)} />
                                                <label class="form-label" for="form3Example3cg">Your Email</label>
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-1">
                                                <input type="password" id="form3Example4cg" class="form-control form-control-lg" value={password} onChange={(event) => setpassword(event.target.value)} />
                                                <label class="form-label" for="form3Example4cg">Password</label>
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-1">
                                                <input type="password" id="form3Example4cdg" class="form-control form-control-lg" value={repeatpassword} onChange={(event) => setrepeatpassword(event.target.value)} />
                                                <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <button type="submit"
                                                    data-mdb-button-init data-mdb-ripple-init class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>

                                            <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                                class="fw-bold text-body"><u><Link to={"/login"}>Login here</Link></u></a></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Registration;
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [input, setInput] = useState({ email: "", password: "" });
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8002/posts")
            .then((res) => setData(res.data))
            .catch((error) => console.log(error))
    }, []);

    const LoginHandler = (event) => {
        event.preventDefault();

        const user = data.some(
            (userData) => userData.email === input.email && userData.password === input.password
        );
        if (user === true) {
            navigate("/");
        } else {
            alert("Check username and password");
        }
    };

    return (
        <>
            <section class="vh-100 gradient-custom" style={{ backgroundColor: "blue" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                <div class="card-body p-5 text-center">
                                    <div class="mb-md-5 mt-md-4 pb-5">
                                        <h2 class="fw-bold mb-1 text-uppercase">Login</h2>
                                        <p class="text-white-50 mb-5">Please enter your email and password!</p>
                                        <form onSubmit={LoginHandler}>
                                            <div data-mdb-input-init class="form-outline form-white mb-1">
                                                <input
                                                    type="email"
                                                    id="typeEmailX"
                                                    class="form-control form-control-lg"
                                                    value={input.email}
                                                    onChange={(event) => setInput({...input, email: event.target.value})}
                                                    name="email"
                                                />
                                                <label class="form-label" for="typeEmailX">Email</label>
                                            </div>
                                            <div data-mdb-input-init class="form-outline form-white mb-4">
                                                <input
                                                    type="password"
                                                    id="typePasswordX"
                                                    class="form-control form-control-lg"
                                                    value={input.password}
                                                    onChange={(event) => setInput({...input, password: event.target.value})}
                                                    name="password"
                                                />
                                                <label class="form-label" for="typePasswordX">Password</label>
                                            </div>
                                            <button
                                                data-mdb-button-init
                                                data-mdb-ripple-init
                                                class="btn btn-outline-light btn-lg px-5"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                    <div>
                                        <p class="mb-0">Don't have an account? <a href="/register" class="text-white-50 fw-bold">Registration</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;


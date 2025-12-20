import { Link } from 'react-router-dom';
import './form.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            toast.error("Please fill in all fields");
            return;
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        // Success example
        toast.success("Logged in successfully!");
    };
    return (
        <div className="form-wrapper">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />

            <h1 className="form-title">Login to your account</h1>

            <form onSubmit={formSubmitHandler} className="form">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />

                <button className="form-btn" type="submit">
                    Login
                </button>
            </form>

            <div className="form-footer">
                Don't have an account?{" "}
                <Link to="/register" className="forms-link">
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Login
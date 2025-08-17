import "./Signup.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be atleast 6 characters";
    }

    if (!form.cpassword.trim()) {
      newErrors.cpassword = "Confirm password is required";
    } else if (form.password !== form.cpassword) {
      newErrors.cpassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      axios.post("http://localhost:5000/signup", form)
        .then(() => {
          setSuccessMessage("Account created successfully!");
          console.log("success")
        })
        .catch(() => {
          alert("Signup failed. Please try again.");
        });
    }
  };

  return (
    <div className="form1">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Signup</h1>

        <label>Name*</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <span style={{color:"red"}}>{errors.name}</span>

        <label>Email*</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        <span  style={{color:"red"}}>{errors.email}</span>

        <label>Password*</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        <span style={{color:"red"}}>{errors.password}</span>

        <label>Confirm Password*</label>
        <input type="password" name="cpassword" value={form.cpassword} onChange={handleChange} />
        <span  style={{color:"red"}}>{errors.cpassword}</span>

        <button type="submit">Create Account</button>
        <span className="success" style={{color:"green", marginBottom:"10px", fontWeight:"bold", textAlign:"center"}}>{successMessage}</span>

        <Link to="/">Back to Login page</Link>
      </form>
    </div>
  );
}

export default Signup;

"use client";

import "./index.css";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [message, setMessage] = useState("");

  const validateName = (val) => {
    const v = val.trim();
    if (v.length === 0) return "do not empty";
    if (v.length < 3) return "too short";
    if (!/^[A-Za-z]+$/.test(v)) return "only letters avaible";
    else return "";
  };

  const validateUserName = (val) => {
    const v = val.trim();
    if (v.length === 0) return "do not empty";
    if (v.length < 2) return "too short";
    else return "";
  };

  const handleChangeinput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const firstErrs = validateName(formData.firstName);
    const lastErrs = validateName(formData.lastName);
    const userErrs = validateUserName(formData.userName);

    setErrors({ firstName: firstErrs, lastName: lastErrs, userName: userErrs });
    if (firstErrs || lastErrs || userErrs) {
      setMessage("");
      return;
    }
    setMessage(
      `success ${formData.firstName} ${formData.lastName} ${formData.userName}`
    );
  };

  return (
    <div className="container">
      <div className="navbarcontainer">
        <Image src="/icon.png" alt="My photo" width={60} height={60} />
        <h1 className="navbarwords">Join Us! 😎</h1>
        <p style={{ fontSize: 18 }}>
          Please provide all current information accurately.
        </p>
      </div>

      <div className="inputcontainer">
        <p style={{ marginTop: 10, fontSize: 14 }}>First name *</p>
        <input
          name="firstName"
          onChange={handleChangeinput}
          placeholder="Enter first name here"
          value={formData.firstName}
          className="inputarea"
        />
        {errors.firstName && (
          <div id="firstName-error" className="alert">
            {errors.firstName}
          </div>
        )}
        <p style={{ marginTop: 10, fontSize: 14 }}>Last name *</p>
        <input
          name="lastName"
          onChange={handleChangeinput}
          placeholder="Enter last name here"
          value={formData.lastName}
          className="inputarea"
        />
        {errors.lastName && (
          <div id="lastName-error" className="alert">
            {errors.lastName}
          </div>
        )}
        <p style={{ marginTop: 10, fontSize: 14 }}>User name *</p>
        <input
          name="userName"
          onChange={handleChangeinput}
          placeholder="Enter user name here"
          value={formData.userName}
          className="inputarea"
        />
        {errors.userName && (
          <div id="userName-error" className="alert">
            {errors.userName}
          </div>
        )}
        {message && <div className="alert">success!!!!</div>}
      </div>
      <div className="endcontainer">
        <button className="btn" onClick={handleSubmit}>
          <p style={{ fontSize: 14 }}>Continue 1/3 </p>
          <Image src="/vector.png" alt="My photo" width={7.41} height={12} />
        </button>
      </div>
    </div>
  );
}

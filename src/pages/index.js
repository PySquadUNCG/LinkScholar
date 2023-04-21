import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import LinkScholarAPI from "../backend/api/API";
const SignInPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    password: "",
    confPassword: "",
  });
  const [formFilled, setFormFilled] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    if (formData.password === formData.confPassword) {
      console.log("Form submitted:", formData);
      event.preventDefault();

      const newStudent = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        user_pass: formData.password,
        school_id: formData.studentId,
        email: formData.email,
      };

      const { response, loaded } = await LinkScholarAPI(
        "/api/post/user/",
        "student",
        newStudent,
        "POST"
      );

      if (Object.keys(response)[0] === "Error") {
        alert(response[Object.keys(response)[0]]);
      } else {
        alert("Account created successfully!");
        router.push("/login");
      }
    } else {
      console.error("Passwords do not match: Try Again!");
    }
  };

  useEffect(() => {
    if (
      formData.password === formData.confPassword &&
      formData.studentId.length === 9
    ) {
      const isFormFilled = Object.values(formData).every(
        (value) => value !== ""
      );
      setFormFilled(isFormFilled);
    } else {
      console.error("Passwords do not match: Try Again!");
    }
  }, [formData]);

  return (
    <>
      <div className="jb">
        <div class="topnav">
          <a class="active">Sign Up</a>
          <Link href="/login">Login</Link>
        </div>

        <Head>
          <title>LinkScholar-Sign up</title>
          <Link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div class="signup-box">
          <h1>Welcome To </h1>
          <div class="icon">
            <img src="/LinkScholar.png" alt="My Image" />
          </div>
          <h2>Sign up</h2>

          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              id="first"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <label>Last Name</label>
            <input
              type="text"
              id="last"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label>Student ID</label>
            <input
              type="number"
              id="studentId"
              name="studentId"
              value={formData.studentId}
              onChange={handleInputChange}
              minLength={9}
              maxLength={9}
              required
            />
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              id="confpassword"
              name="confPassword"
              value={formData.confPassword}
              onChange={handleInputChange}
              required
            />
            {/*<label className='checkboxlabel'>  Is this a Teacher Account?<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} /></label>*/}
            <button
              /*onClick={postData}*/ className="submit"
              type="submit"
              disabled={!formFilled}
            >
              {" "}
              Sign Up{" "}
            </button>
          </form>
          <p>
            By clicking the Sign Up button,you agree to our <br />
            <a href="#">Terms and Condition</a> and{" "}
            <a href="#">Policy Privacy</a>
          </p>
          <p class="para-2">
            <a>Already have an account?</a>
            <Link href="/login"> Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInPage;

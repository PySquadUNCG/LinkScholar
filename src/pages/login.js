import React, { useEffect,useState } from 'react'
import Link from 'next/link';
import Head from 'next/head';
import LinkScholarAPI from '../backend/api/API';


const LogInPage = () => {
  const [formData, setFormData] = useState({
    studentID: '',
    password: '',

  });
  const [formFilled, setFormFilled] = useState(false);


  

  const handleInputChangelog = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    
    const {response,loaded} = await LinkScholarAPI("/api/user/get/", "schoolID", {studentID: formData.studentID});
    console.log(response);
    if (studentID === 9) {
      
     
      console.log('Form submitted:', formData);
      event.preventDefault(); 
      router.push("/homepage");
    }else {
      alert("Username/Password is Incorrect! Try again.")
    }
  };



 // Check if all form inputs have a value
  useEffect(() => {
 
      const isFormFilled = Object.values(formData).every((value) => value !== '');
      setFormFilled(isFormFilled);
   
     
  }, [formData]);
  

  return (

  <>
 <div className='jb'>
   
    <div class="topnav">
    <a class="active" >Login</a>
    <Link href="/signin">Sign Up</Link>
    </div>

  <Head>
    <title>Linkscholar-Login</title>
  </Head> 
 
  
    <div class="login-box">
      <div class = "icon"><img src="/LinkScholar.png" alt="My Image" /></div>
      <form onSubmit={handleSubmit}>
        <label>Enter ID</label>
        <input type="number" id = "studentID" name = "studentID" value = {formData.studentID} onChange={handleInputChangelog}  required />

        <label>Password</label>
        <input type="password" id = "password" name = "password" value={formData.password} onChange={handleInputChangelog} required  />
       
        <button className='submit' type="submit" disabled={!formFilled} > Login </button>
            

      </form>
      <Link className = "indent" href="/signin">Need An Account? Sign Up Here</Link> <br></br>
      <Link className = "indent-2" href="/forgotusrname">Forgot username or password?</Link>
      
       </div>  
  </div>
  </>

  )
}

export default LogInPage
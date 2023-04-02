
import Link from 'next/link';
import Image from "next/image";
import Head from 'next/head'
import {
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

function Forgot() {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values, isLoading, error } = state;

    const onBlur = ({ target }) =>
        setTouched((prev) => ({ ...prev, [target.name]: true }));


    {/*const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }));
        try {
            await sendContactForm(values);
            setTouched({});
            setState(initState);
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
    };*/}
    const [formData, setFormData] = useState({
        email: '',

    
    
    
    
      });
      const [formFilled, setFormFilled] = useState(false);
    
    
    
    
      const handleInputChangeForgot = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
       
    
        if (formData.password === formData.confPassword) {
          console.log('Form submitted:', formData);
          event.preventDefault();
          setSuccessMessage('Your form has been submitted successfully!');
        } else {
          console.error('Passwords do not match: Try Again!'); 
          
        }
      };
    
      // Check if all form inputs have a value
    
      useEffect(() => {
        if (formData.password === formData.confPassword) {
          const isFormFilled = Object.values(formData).every((value) => value !== '');
          setFormFilled(isFormFilled);
        } else { 
          console.error('Passwords do not match: Try Again!') }
      }, [formData]);


    return (
        <>
            <Head>
                <title>Linkscholar-Login</title>
                <Link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className = 'jb'>
            <body >
                <div class="topnav">
                    <Link href="/login">Login</Link>
                    <Link href="/signin">Sign In</Link>
                </div>
                <div class="forgot-box">

                    <div class="icon"><img src="/LinkScholar.png" alt="My Image" />
                    </div>
                    <FormControl isRequired isInvalid={touched.name && !values.name} mb={5} onChange={handleSubmit}>
                        <FormLabel className='labelname'>Enter Email</FormLabel>
                        <Input className='inputbox'
                            type="text"
                            name="email"
                            id = "email"
                            errorBorderColor="red.300"
                            value={formData.email}
                            onChange={handleInputChangeForgot}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage className='forgoterror'>Required</FormErrorMessage> 
                        <Link href="/login">
                        <button className='submit-2' type="submit" disabled={!formFilled}> Confirm </button>
                    </Link>
                    </FormControl>
                   


                </div>

            </body></div></>
    );
}

export default Forgot;
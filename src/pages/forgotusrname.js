
import Link from 'next/link';
import Image from "next/image";
import Head from 'next/head'
import {
    Button,
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
import { useState } from "react";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

function Forgot() {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values, isLoading, error } = state;

    const onBlur = ({ target }) =>
        setTouched((prev) => ({ ...prev, [target.name]: true }));

    const handleChange = ({ target }) =>
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const onSubmit = async () => {
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
    };


    return (
        <>
            <Head>
                <title>Linkscholar-Login</title>
                <Link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <div class="topnav">
                    <Link href="/login">Login</Link>
                    <Link href="/signin">Sign In</Link>
                </div>
                <div class="forgot-box">
                    <div className='forgotstatement'>
                        <a className='labelname2' >Yikes, Forgot Your Username?</a><br></br>
                        <a className='labelname2' >We got you Covered.</a>
                    </div>
                    <div class="icon"><img src="/LinkScholar.png" alt="My Image" />
                    </div>
                    <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
                        <FormLabel className='labelname'>Enter Username or Email</FormLabel>
                        <Input className='inputbox'
                            type="text"
                            name="name"
                            errorBorderColor="red.300"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={onBlur}
                        />
                        <FormErrorMessage className='forgoterror'>Required</FormErrorMessage>
                    </FormControl>
                    <Link type="submit" href="/login">
                        <a className='submitforgot'>Login</a>
                    </Link>


                </div>

            </body></>
    );
}

export default Forgot;
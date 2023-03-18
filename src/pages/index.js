import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import API from '@/backend/api/API'
import { useEffect, useState } from 'react'
import LinkScholarAPI from '@/backend/api/API'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const reqHeaders = new Headers();
  reqHeaders.append("Accept", "application/json");

  const newStudent = {
    first_name: "Devon",
    last_name: "Loy",
    user_pass: "TEST_PASS",
    school_id: "884594913",
    email: "d_loy@uncg.edu"
  }

  const changePass = {
    email: "d_loy@uncg.edu",
    new_password: "CHANGED_PASS"
  }

  const { response, loaded } = LinkScholarAPI("/api/get/user/", "email", { param: "lcbrown9@uncg.edu" });
  //const { response, loaded } = LinkScholarAPI("/api/post/user/", "student", newStudent, "POST");
  //const { response, loaded } = LinkScholarAPI("/api/post/account/", "changePassword", changePass, "POST");

  useEffect(() => {
    setMessage(response);
    setLoading(loaded);
  }, [response])

  return (
    <div className={styles.container}>
      <p> {!loading ? message : "Loading.."}</p>
    </div>
  )
}
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

  const { response, loaded } = LinkScholarAPI("/api/get/user/", "firstName", ["param", "Luke"]);

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
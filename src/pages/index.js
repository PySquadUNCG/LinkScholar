import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import API from '@/backend/api/API'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/hello/')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setLoading(false);
      })
  }, [])

  return (
    <div className={styles.container}>
      <p> {!loading ? message : "Loading.."}</p>
    </div>
  )
}
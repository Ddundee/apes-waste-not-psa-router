"use client";
import Image from 'next/image'
import styles from './page.module.css'
// import {us} from 'next/router'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('https://youtu.be/UJd6TdbLuzU') 
  }, [])

  return (
    <h1></h1>
  )
}

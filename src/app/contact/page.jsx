import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.contactcontainer}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill={true} className={styles.image} alt="contact" />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input}/>
          <input type="email" placeholder="email" className={styles.input}/>
          <textarea className={styles.textArea} cols="30" rows="10" placeholder="message"></textarea>
          <Button url="#" buttonTitle="Send" />

        </form>
      </div>
    </div>
  )
}

export default Contact
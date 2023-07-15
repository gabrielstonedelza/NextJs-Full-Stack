import React from 'react'
import styles from "./button.module.css"
import Link from 'next/link'

const Button = ({buttonTitle,url }) => {
  return (
    <Link href={url}>
        <button className={styles.container}>{buttonTitle}</button>
    </Link>
  )
}

export default Button
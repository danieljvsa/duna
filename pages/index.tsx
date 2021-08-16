import Head from 'next/head'
import React, { useContext } from 'react'
import styles from '../styles/Home.module.scss'
import {DunaContext, DunaProvider} from "../contexts/DunaConext";
import { Book } from '../components/Book'
import { Quote } from '../components/Quote'
import { Search } from '../components/Search'


export default function Home() {
  const {quote, book, value, bookTitle} = useContext(DunaContext)

  return (
    <DunaProvider quote={quote} book={book} value={value} bookTitle={bookTitle}>
      <div>
        <Head>
          <title>Duna</title>
        </Head>
        <div className={styles.container}>
          <Quote />
          <main>
            <header>
              <h2>Books</h2>
            </header>
            <Search />          
            <Book />
          </main>
        </div>
      </div>
    </DunaProvider>
  )
}






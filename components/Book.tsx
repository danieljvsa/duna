import React, { useContext } from 'react'
import { DunaContext } from '../contexts/DunaConext'
import styles from '../styles/Home.module.scss'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

export function Book(){
    const {book, value, bookTitle} = useContext(DunaContext)

    return(
        <div className={styles.main_content}>
            {(value === false) ? (
                book.map((book) => (
                    <div className={styles.card} key={book.id}>
                        <div className={styles.bg}></div>
                        <div className={styles.content_card}>
                            <h3>{book.title}</h3>
                            <p>{book.year} <br /> 
                                {(Array.isArray(book.author)) ? 
                                    (book.author[0] + "," +book.author[1]) :
                                    (book.author)
                                } <br /> 
                                <Link href={(undefined) ? "#" : book.wiki_url}><a>Leia Mais <FontAwesomeIcon icon={faArrowRight} /></a></Link>
                            </p>                    
                        </div>
                    </div>
                ))
            ):(
                book.map((book) => (
                    (book.title.toLowerCase().includes(bookTitle.toLowerCase())) ? (
                        <div className={styles.card} key={book.id}>
                            <div className={styles.bg}></div>
                            <div className={styles.content_card}>
                                <h3>{book.title}</h3>
                                <p>{book.year} <br /> 
                                    {(Array.isArray(book.author)) ? 
                                        (book.author[0] + "," +book.author[1]) :
                                        (book.author)
                                    } <br />
                                    <Link href={(undefined) ? "#" : book.wiki_url}><a>Leia Mais <FontAwesomeIcon icon={faArrowRight} /></a></Link>
                                </p>                    
                            </div>
                        </div> 
                    ) : (
                        ""
                    )
                ))
            )}
        </div>
    )
}
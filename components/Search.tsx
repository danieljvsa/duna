import React, { useContext } from 'react'
import { DunaContext } from '../contexts/DunaConext'
import styles from '../styles/Home.module.scss'
import { useForm } from 'react-hook-form'



export function Search(){
    const {value, search} = useContext(DunaContext)
    const { register, handleSubmit } = useForm();

    async function handleSignIn(data: any) {
        await search(data)
    }

    return(
        <div className={styles.search}>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <input type="search" placeholder="Search a book" className={styles.search_input} {...register('value')} />
            </form>
        </div>
    )
}


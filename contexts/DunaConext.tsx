import { createContext, ReactNode, useEffect, useState } from "react"
import axios from 'axios'


interface Data {
    value: string
}

interface Book {
    id: number,
    title: string,
    year: number,
    author: Array<String> | String,
    wiki_url: any
}

interface DunaContextData {
    quote: String,
    book: Array<Book>,
    value: boolean,
    search: (data: string) => Promise<void>,
    bookTitle: string
}

interface DunaProviderProps {
    children: ReactNode;
    quote: String,
    book: Array<Book>,
    value: boolean,
    bookTitle: string
}

export const DunaContext = createContext({} as DunaContextData)

export function DunaProvider({children, ...rest}: DunaProviderProps){
    const [quote, setQuote] = useState('')
    const [book, setBook] = useState<Book[]>([])
    const [value, setValue] = useState(false)
    const [bookTitle, setBookTitle] = useState('')
    console.log(bookTitle)
    useEffect(() => {
        
            axios.get('https://the-dune-api.herokuapp.com/quotes').then(
                res => {
                    //console.log(res.data[0].quote)
                    setQuote(res.data[0].quote)
                }
            )
            axios.get('https://the-dune-api.herokuapp.com/books/50').then(
                res => {
                    //console.log(res.data)
                    setBook(res.data)
                }
            )
        
    },[])

    async function search(data: any) {
        if (data.value == "" || data.value == undefined) {
            setValue(false)
        }else{
            setValue(true)
            setBookTitle(data.value)
        }
    }

    return(
        <DunaContext.Provider value={{quote, book, value, search, bookTitle}}>
            {children}
        </DunaContext.Provider>
    )
}
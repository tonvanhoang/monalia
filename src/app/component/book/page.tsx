import Link from "next/link"
import '../book/book.css'
export default function ComponentBook(){
    return(
        <>
         <button>
          <Link href={`https://www.booking.com/...`}>
            BOOK
          </Link>
        </button>
        </>
    )
}
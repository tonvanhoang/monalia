import '../allroom/allroom.css'
import Link from 'next/link'
export default function ComponentButtonAllRoom(){
    return(
        <>
        <div className="view">
        <button>
          <Link href={`/page/room`}>VIEW ALL ROOMS</Link>
        </button>
      </div>
        </>
    )
}
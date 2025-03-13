import '../gallery/gallery.css'
import ComponentNav from '@/app/component/nav/page'
import Link from 'next/link'
import ComponentGallery from '@/app/component/gallery/page'
export default function PageGallery(){
    return(
        <>
        <ComponentNav/>
        <div className="containerGallery">
        <div className='navigation'>
            <li><Link href={`/`}>HOME</Link> &gt; <span>GALLERY</span></li>
        </div>
        <div className="containerTitle">
        <div className='title'>
            <h1>GALLERY</h1>
            <hr />
        </div>
        <ComponentGallery/>
        </div>
        </div>
        </>
    )
}
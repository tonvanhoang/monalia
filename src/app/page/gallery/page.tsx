import '../gallery/gallery.css'
import ComponentNav from '@/app/component/nav/page'
import Link from 'next/link'
import ComponentGallery from '@/app/component/gallery/page'
export default function PageGallery(){
    return(
        <>
        <ComponentNav/>
        <div className="headerLocation">
            <img src="/img/monalia-parga-suites-8.webp" alt="" />
            <div className='content'>
                <h1>GALLERY</h1>
                <p>ROLL DOWN</p>
            </div>
        </div>
        <div className='navigation'>
            <li><Link href={`/`}>HOME</Link> &gt; <span>ROOM</span></li>
        </div>
        <ComponentGallery/>
        </>
    )
}
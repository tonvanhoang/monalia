import '../elea/elea.css'
import ComponentNav from '@/app/component/nav/page'
import ComponentButtonAllRoom from '@/app/component/allroom/page'
import ComponentGaeaElea from '@/app/component/gaea&elea/page'
import Link from 'next/link'
export default function PageElea(){
    return(
        <>
        <ComponentNav/>
        <div className="headerGage">
            <img src="/img/monalia-parga-suites-8.webp" alt="" />
            <div className='content'>
                <h1>ELEA</h1>
                <p>ROLL DOWN</p>
            </div>
        </div>
        <div className='navigation'>
            <li><Link href={`/`}>HOME</Link> &gt; <Link href={`/page/room`}>ROOMS</Link>&gt;<span>SUITES</span>&gt;<span>ANTHEA</span></li>
        </div>
        <ComponentGaeaElea/>
        <ComponentButtonAllRoom/>
        </>
    )
}
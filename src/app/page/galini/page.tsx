import '../galini/galini.css'
import ComponentNav from '@/app/component/nav/page'
import ComponentGaeaElea from '@/app/component/gaea&elea/page'
import ComponentButtonAllRoom from '@/app/component/allroom/page'
import Link from 'next/link'
export default function PageGalini(){
    return(
        <>
        <ComponentNav/>
        <div className="headerGage">
            <img src="/img/monalia-parga-suites-8.webp" alt="" />
            <div className='content'>
                <h1>GALINI</h1>
                <p>ROLL DOWN</p>
            </div>
        </div>
        <div className='navigation'>
            <li><Link href={`/`}>HOME</Link> &gt; <Link href={`/page/room`}>ROOMS</Link>&gt;<span>VILLAS</span>&gt;<span>ANTHEA</span></li>
        </div>
        <ComponentGaeaElea/>
        <ComponentButtonAllRoom/>
        </>
    )
}
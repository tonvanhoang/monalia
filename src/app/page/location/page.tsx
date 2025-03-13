import '../location/localtion.css'
import ComponentNav from '@/app/component/nav/page'
import ComponentLocationChild from '@/app/component/localtionChild/page'
import ComponentAxerontasRiver from '@/app/component/axerontasRiver/page'
import ComponentParga from '@/app/component/parga/page'
import Link from 'next/link'
export default function PageLocation(){
    return(
        <>
        <ComponentNav/>
        <div className="headerLocation">
            <img src="/img/monalia-parga-suites-8.webp" alt="" />
            <div className='content'>
                <h1>LOCATION</h1>
                <p>ROLL DOWN</p>
            </div>
        </div>
        <div className='navigation'>
            <li><Link href={`/`}>HOME</Link> &gt; <span>LOCATION</span></li>
        </div>
        <ComponentLocationChild/>
        <ComponentAxerontasRiver/>
        <ComponentParga/>
        
        </>
    )
}
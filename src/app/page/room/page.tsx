import '../room/pageroom.css'
import ComponentNav from '@/app/component/nav/page'
import ComponentSuitesRoom from '@/app/component/suitesRoom/page'
import ComponentVilaRoom from '@/app/component/villaRoom/page'
import Link from 'next/link'
export default function PageRoom(){
    return(
        <>
        <ComponentNav/>
        <div className="headerRoom">
            <img src="/img/monalia-parga-suites-8.webp" alt="" />
            <div className='content'>
                <h1>ROOMS</h1>
                <p>SCROLL DOWN</p>
            </div>
        </div>
        <div className='navigation'>
            <li><Link href={`/`}>HOME</Link> &gt; <span>ROOM</span></li>
        </div>
        <div className="title">
            <p>The rooms of Monalia Luxury Suites highlight the importance of elegant and timeless design. The use of natural colors and materials such as stone, wood and ceramic objects offer an authentic atmosphere of Mediterranean life, enhancing the sense of tranquility and comfort.</p>
        </div>
        <ComponentSuitesRoom/>
        <ComponentVilaRoom/>
        </>
    )
}
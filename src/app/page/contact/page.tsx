import '../contact/contact.css'
import ComponentNav from '@/app/component/nav/page'
import Link from 'next/link'
import ComponentContactChild from '@/app/component/contactChild/page'
export default function PageContact(){
    return(
        <>
        <ComponentNav/>
        <div className="headerContact">
            <img src="/img/monalia-parga-suites-8.webp" alt="" />
            <div className='content'>
                <h1>CONTACT</h1>
                <p>ROLL DOWN</p>
            </div>
        </div>
        <div className='navigation'>
            <li><Link href={`/`}>HOME</Link> &gt; <span>ROOM</span></li>
        </div>
        <ComponentContactChild/>
        </>
    )
}
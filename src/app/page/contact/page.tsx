import '../contact/contact.css'
import ComponentNav from '@/app/component/nav/page'
import Link from 'next/link'
import ComponentContactChild from '@/app/component/contactChild/page'
export default function PageContact(){
    return(
        <>
        <ComponentNav/>
       <div id='containerContact'>
       <div className='navigation'>
            <li><Link href={`/`}>HOME</Link> &gt; <span>ROOM</span></li>
        </div>
        <ComponentContactChild/>
       </div>
        </>
    )
}
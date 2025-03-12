import ComponentSection_1 from "@/app/component/section-1/page"
import ComponentSection_2 from "@/app/component/section-2/page"
import ComponentSlideIMG from "@/app/component/slideIMG/page"
import ComponentLocation from "@/app/component/location/page"
import ComponentNav from "@/app/component/nav/page"
import Link from "next/link"
import '../monalia/monalia.css'
export default function PageMonalia(){
    return(
        <>
        <ComponentNav/>
        <div className="headerMonalia">
            <img src="/img/monalia-parga-suites-8.webp" alt="" />
            <div className='content'>
                <h1>MONILIA</h1>
                <p>ROLL DOWN</p>
            </div>
        </div>
        <div className='navigation'>
            <li><Link href={`/`}>HOME</Link> &gt; <span>ROOM</span></li>
        </div>
        <ComponentSection_1/>
        <ComponentSection_2/>
        <ComponentSlideIMG/>
        <ComponentLocation/>
        </>
    )
}
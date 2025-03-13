import '../section-2/section-2.css';
import Link from 'next/link';
export default function ComponentSection_2(){
    return(
        <>
        <div className="section-2">
        <div className="item-1">
            <p>The suites and villas blend seamlessly into the natural environment, offering a unique stay experience where modern design with natural materials and earthy tones meets exceptional craftsmanship and the authentic aesthetics of Greek nature.</p>
            <button><Link href={`/page/monalia`}>MORE</Link></button>
        </div>
        <div className="item-2">
            <img src="/img/monalia-parga-suites-20.webp" alt=""/>
        </div>
        <div className="item-3">
            <img src="/img/monalia-parga-suites-19.webp" alt=""/>
        </div>
    </div>
        </>
    )
}
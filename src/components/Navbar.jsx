import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/')
    }
    return (
        <div className='  bg-white w-[full] h-[80px] ml-[260px]  border-b border-gray-300'>
            <div className=' absolute flex items-center gap-4  bg-white w-[72px] h-[40px] mt-[20px] ml-[75%] mb-[8px] overflow-hidden'>
                <div className=' w-[40px] h-[40px] border rounded-[12px] '>

                    <img onClick={handleClick} className="cursor-pointer w-full h-full rounded-[12px] object-center object-cover" src="https://s3-alpha-sig.figma.com/img/ba89/28bf/7e8a7e1773217fe8eb988ca7e398a1eb?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BXz-zbPeR5ebECoxgpMSNh4mkP5wcD-MKIfYHB~2cI7G9C1fMF71mSWzY5MV~mvQFmbM5lU0n-wffmSCOR74sco7ZpfDp5pxL4wB0FHEmfnSu6OHAwUeIORqOruNRDfY-E2BkWijGogiQun3Yfq28dR6LU5NlKukxQcOcbYutFsX98uAOrtzRkV2k5Ws6f-gUqwQGBaCkiY3d1gzETqMNqBN84udzWN5p17X6AznXhpX9HnI6AoTSTLe0bPgEVH4g2u34iHOUGw8y~9WykYeWPAg3lJJ7ABlJQ-xvLWkh1~j7iS1IimUpLWJbTYkz6M-juH8stT7NRSWIJ2iersKFw__" alt="" />
                </div>
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.87998 0.290019L5.99998 4.17002L2.11998 0.290019C1.72998 -0.0999804 1.09998 -0.0999804 0.70998 0.290019C0.31998 0.680019 0.31998 1.31002 0.70998 1.70002L5.29998 6.29002C5.68998 6.68002 6.31998 6.68002 6.70998 6.29002L11.3 1.70002C11.69 1.31002 11.69 0.680019 11.3 0.290019C10.91 -0.0899811 10.27 -0.0999808 9.87998 0.290019Z" fill="#76787A" />
                </svg>
            </div>
        </div>
    )
}
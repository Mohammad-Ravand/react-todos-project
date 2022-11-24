import React, { useState } from 'react'

import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination({ paginate,changePaginationPage}) {

    const chagePage= (e,page)=>{
        e.preventDefault();
        changePaginationPage(page)
    };

    const before = () => {
        const textNumber = (paginate.current-1 >0 ?  paginate.current-1 : 1);
        const html = <a onClick={(e)=>chagePage(e,textNumber)} className='before text-white bg-orange-500 mx-1 rounded-md' href="one">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className='px-2 text-orange-200' />
        </a>;

        const condition = paginate.pages >= 3 || paginate.current >= 2;

        return condition && html;
    };

    const one = () => {
        let textNumber = (paginate.current>=2 ? paginate.current-1 : 1);
        const html = <a onClick={(e)=>chagePage(e,textNumber)} className={`one px-2 text-white  mx-1 rounded-md ${textNumber==paginate.current ? 'bg-orange-800' : 'bg-orange-500'}`} href="one">{textNumber}</a>;

        const condition = paginate.pages >= 1 || (paginate.current>=2);

        return condition && html;
    };

    const two = () => {
        let textNumber = (paginate.current>=2 ? paginate.current : 2);



        const html = <a onClick={(e)=>chagePage(e,textNumber)} className={`two px-2 text-white  mx-1 rounded-md ${textNumber==paginate.current ? 'bg-orange-800' : 'bg-orange-500'}`} href="one">{textNumber}</a>;

        const condition = paginate.pages >=2 && paginate.current;

        return condition && html;
    }

    const three = () => {
        let textNumber = (paginate.current>=3 ? paginate.current+1 : 3)

        const html = <a onClick={(e)=>chagePage(e,textNumber)} className='three px-2 text-white bg-orange-500 mx-1 rounded-md' href="one">{textNumber}</a>;

        const condition = paginate.pages >= 3 && paginate.current+1 <= paginate.pages;

        return condition && html;
    }

    const dot = () => {

        const html = <a onClick={(e)=>e.preventDefault()} className='dot px-2 text-white bg-orange-500 mx-1 rounded-md' href="one">...</a>;

        const condition = paginate.pages >= 4 && paginate.current+2<=paginate.pages;

        return condition && html;
    }

    const last = () => {
        const textNumber = paginate.pages;
        const html = <a onClick={(e)=>chagePage(e,textNumber)} className='last px-2 text-white bg-orange-500 mx-1 rounded-md' href="one">{paginate.pages}</a>;

        const condition = paginate.pages >= 4 && paginate.current+2<=paginate.pages;

        return condition && html;
    }

    const after = () => {
        const textNumber = (paginate.current+1 < paginate.pages) ? paginate.current+1 : paginate.pages;
        const html = <a onClick={(e)=>chagePage(e,textNumber)} className={`after px-2 text-white  mx-1 rounded-md ${textNumber==paginate.current ? 'bg-orange-800' : 'bg-orange-500'}`} href="one">
            <FontAwesomeIcon icon={faArrowAltCircleRight} className='px-2 text-orange-200' />
        </a>;

        const condition = paginate.pages >= 4 && paginate.current+2<=paginate.pages;

        return condition && html;
    }

    return (
        <div id='Pagination' className='bg-blue-400 sticky bottom-[0] left-0 mt-2 right-0  m-auto text-center py-1 w-1/2 rounded-md'>
            <nav>
                {/* before page */}
                {before()}


                {/* page one */}
                {one()}

                {/* page two ********save current here == paginate.current *********/}
                {two()}

                {/* page three */}
                {three()}

                {/* page dots */}
                {dot()}

                {/* last page */}
                {last()}

                {/* after page */}
                {after()}

            </nav>
        </div>
    )
}

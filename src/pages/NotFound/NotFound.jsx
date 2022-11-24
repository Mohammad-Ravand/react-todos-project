import React from 'react'
import Navbar from './../../components/navbar/Navbar';

export default function NotFound() {
    return (
        <div id='notfound' className=''>
            <div className="grid grid-rows-3 bg-gray-400  gird-col-3 gap-4 h-screen ">
                <div className="col-span-4 row-span-1  ">
                    <Navbar />
                </div>
                <div className="col-span-4     flex flex-col justify-center">
                    <div className="rounded-md w-11/12 m-auto bg-gray-200 shadow-md text-center py-16 border-2">
                        <h3 className='text-orange-400 font-bold text-lg'>Not Found page.</h3>
                    </div>
                </div>
                
            </div>


        </div>
    )
}

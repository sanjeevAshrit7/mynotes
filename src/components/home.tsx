import React from 'react';
import { useMediaQuery } from 'react-responsive';

import image from '../bg.jpg'

function Home() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <main>
            <img src={image} alt={"Home NA"} className={"absolute object-cover w-full h-full"} />
            <section className="relative container w-full lg:px-0 px-5 lg:w-3/4 mx-auto">
                <div className={isTabletOrMobile ? "flex lg:flex-row flex-col justify-between pt-10" : "flex lg:flex-row flex-col justify-between"}>
                    <div className="mt-5">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-500">Hello👋.. find your notes here and do good 👍</h2>
                        {/* <p className="text-xl lg:text-2xl">All The Best</p> */}
                    </div>
                    <div className="flex items-center lg:mt-0 mt-5 gap-3 lg:flex-row flex-col">
                        
                    </div>
                </div>
                <hr className="my-10" />
                {/* <h2 className='text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name text-center'>Hi there, this is a sample site</h2> */}
            </section>
        </main>
    )
}

export default Home;

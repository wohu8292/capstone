import React from 'react'

import Banner from "./Banner"
import VideoPlayer from "./VideoPlayer"
import ImageSlider from "./ImageSlider"

const Home = () => {
    return (
        <div className='bg-black text-white'>
            {/* <Banner title={"Reduce By Reuse"} backgroundImage={exampleImg}/> */}
            <div className="max-w-4xl mx-auto px-6 divide-y divide-gray-300">
                <div className='py-12 my-12'>
                    <Banner/>
                </div>
                <div className='py-12 my-12'>
                    <ImageSlider/>
                </div>
                <div className='py-16 mt-12'>
                    <VideoPlayer title="Learn more about e-waste"/>
                </div>
            </div>
        </div>
    )
}

export default Home
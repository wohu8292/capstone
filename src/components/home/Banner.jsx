import React from 'react';

const Banner = ({title, subtitle, backgroundImage}) => (
    <div className='section'>
        <div
            className="relative w-full h-60 bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center text-white px-4">
                <h1 className="text-3xl font-bold">{title}</h1>
                {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
            </div>
        </div>
    </div>
);

export default Banner;

import React from "react";

export default function Header(){
    return (   
        <header className='fixed top-0 z-10 flex w-full itens-center justify-between transition-all px-4 py-4 lg:px-10 lg:py-6'>
            <div className='flex items-center space-x-2 md:space-x-8'>
                <img src="/logo_netflix.png" alt="Netflix" width={120} height={120} />
                <ul className='hidden md:flex md:space-x-4'>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>My List</li>
                </ul>
            </div>

            <div className='flex items-center space-x-4'>
                <p className="hidden cursor-not-allowed lg:inline"> Kids</p>
                <img src="/icon_netflix.png" alt="" className="cursor-pointer rounded" width={30} height={30}/>
            </div>

        </header>
        
    )

}

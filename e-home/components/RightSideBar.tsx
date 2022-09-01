import React from 'react';
import Image from 'next/dist/client/image';

const RightSideBar = () => {
    return (
        <div className='col-span-2'>
            <div className='p-5 flex flex-row space-x-4 '>
                <div className='hover:bg-gray-200 '>
                    <Image
                        src="https://i.imgur.com/yt00G4a.png"
                        width={40}
                        height={40}
                        layout="fixed"

                    />
                </div>
                <div className='hover:bg-gray-200'>
                    <Image
                        src="https://i.imgur.com/OV38pDy.jpg"
                        width={40}
                        height={40}
                        layout="fixed"

                    /></div>
                <div className='hover:bg-gray-200'>
                    <Image
                        src="https://i.imgur.com/hcD1bah.png"
                        width={40}
                        height={40}
                        layout="fixed"

                    />
                </div>
                <div className='hover:bg-gray-200'>
                    <Image
                        src="https://i.imgur.com/uLKhm4G.jpg"
                        width={40}
                        height={40}
                        layout="fixed"

                    />
                </div>

            </div>

        </div>
    )
}

export default RightSideBar

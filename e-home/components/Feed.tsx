import React from 'react';
import Image from 'next/dist/client/image';

const Feed = () => {
    return (
        <div className='col-span-7 lg:col-span-5 border-x'>
            <div className='bg-green-200'>
                <h1 className='p-5 pb=0 text-xl font-bold'>Good morning, Robert!</h1>
                <p className='p-5 margin-top-0'>The weather is 30°C and sunny day in Imus Cavite</p>
            </div>
            <div className='p-5 flex space-x-10'>
                <div>
                    <Image
                        src="https://i.imgur.com/ua6LEGU.png"
                        width={50}
                        height={50}
                        layout="fixed"

                    />
                </div>
                <div>
                    <Image
                        src="https://i.imgur.com/ua6LEGU.png"
                        width={50}
                        height={50}
                        layout="fixed"

                    /></div>
                <div>
                    <Image
                        src="https://i.imgur.com/ua6LEGU.png"
                        width={50}
                        height={50}
                        layout="fixed"

                    />
                </div>

            </div>
            <div>
                <h1 className='p-5 pb=0 text-xl font-bold'>Favorite Devices</h1>
            </div>
            <div className='p-5 flex space-x-10'>
                <div>
                    <Image
                        src="https://i.imgur.com/kvcMELG.jpg"
                        width={50}
                        height={50}
                        layout="fixed"

                    />
                </div>
                <div>
                    <Image
                        src="https://i.imgur.com/dKpOAzK.jpg"
                        width={50}
                        height={50}
                        layout="fixed"

                    /></div>
                <div>
                    <Image
                        src="https://i.imgur.com/uDzJcir.jpg"
                        width={50}
                        height={50}
                        layout="fixed"

                    />
                </div>
            </div>


        </div>
    )
}

export default Feed

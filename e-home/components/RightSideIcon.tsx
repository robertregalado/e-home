import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}

function RightSideIcon({ Icon, title }: Props) {
    return (
        /*
        <div className='flex items-center cursor-pointer 
        md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl
        active:border-b-2 active:border-blue-500 group'>
            <Icon className={`h-5 text-gray-500 text-center sm:h-7 mx-auto
            group-hover:text-blue-500 ${active && "text-blue-500"}`} />
        </div>
        */
        <div className='hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-700
            cursor-pointer hover:bg-gray-300'>
            <Icon className={`h-5 text-gray-500 text-center sm:h-7 mx-auto
                group-hover:text-blue-500`} />
        </div>
    )
}
export default RightSideIcon
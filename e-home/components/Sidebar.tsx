import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CollectionIcon,
    DotsCircleHorizontalIcon,
    MailIcon,
    UserIcon,
    HomeIcon,
    TrendingUpIcon,
    CogIcon,
} from '@heroicons/react/outline';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
            <img className='m-3 h-20 w-20' src='https://i.imgur.com/KuIiMTi.png'
                alt='' />
            <SidebarRow Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={TrendingUpIcon} title="Analytics" />
            <SidebarRow Icon={CogIcon} title="Accessories" />

            <SidebarRow Icon={UserIcon} title="Sign In" />
            <SidebarRow Icon={DotsCircleHorizontalIcon} title="More" />
        </div>
    )
}

export default Sidebar
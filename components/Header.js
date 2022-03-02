import Image from 'next/image'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  ChevronIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid"

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline"
import HeaderIcon from './HeaderIcon'


const Header = () => {
  return (
    <div className ="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">

        {/* Header Left */}
        <div className ="flex items-center">
            <Image src="https://links.papareact.com/5me"
             width="40"
              height="40"
               layout="fixed" alt="logo"/>

               <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6"/>
                   <input className="hidden md:inline-flex flex ml-2 items-center flex-shrink bg-transparent placeholder-gray-500 outline-none" type="text" placeholder="Search Facebook"/>
               </div>
        </div>
        {/* Header Center */}

        <div className='flex justify-center flex-grow'>
            <div className="flex space-x-2 md:space-x-6">
              <HeaderIcon Icon={HomeIcon} active/>
              <HeaderIcon Icon={FlagIcon} />
              <HeaderIcon Icon={PlayIcon} />
              <HeaderIcon Icon={ShoppingCartIcon} />
              <HeaderIcon Icon={UserGroupIcon} />
            </div>
          </div>


        <div className="flex items-center sm:space-x-2 justify-end">
            {/* Profile Picture */}
            <p className="whitespace-nowrap font-semibold pr-3">Manuel Heav</p>
            <ViewGridIcon className='icon'/>
            <ChatIcon  className='icon'/>
            <BellIcon  className='icon'/>
            <ChevronDownIcon  className='icon'/>
       </div>
    </div>
  )
}

export default Header
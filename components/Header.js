import Image from 'next/image'
import {
  BellIcon,
  ChatIcon,
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


const Header = () => {
  return (
    <div>

        {/* Header Left */}
        <div className ="flex items-center">
            <Image src="https://links.papareact.com/5me"
             width="40"
              height="40"
               layout="fixed" alt="logo"/>

               <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6"/>
                   <input className="flex ml-2 items-center bg-transparent placeholder-gray-500 outline-none" type="text" placeholder="Search Facebook"/>
               </div>
        </div>
        {/* Header Center */}
        {/* Header Right */}
    </div>
  )
}

export default Header
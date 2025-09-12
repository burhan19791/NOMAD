'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import {
  FaBell,
  FaMoon,
  FaRegBell,
  FaRegMoon,
  FaSearch,
  FaSun,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiMenu3Fill } from 'react-icons/ri';
import CustomSearch from './custom-search';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Props = {
  toggleSidebar: () => void;
};

const Topbar = ({ toggleSidebar }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="bg-card-background flex items-center justify-between p-6 py-7 lg:ml-20 xl:ml-64">
      <div className="text-font-primary flex items-center gap-4 text-lg font-medium">
        {isDarkMode ? (
          <Image
            className="block lg:hidden"
            src={'/images/Nomad-logo-white.png'}
            alt="Logo"
            width={30}
            height={30}
          />
        ) : (
          <Image
            className="block lg:hidden"
            src={'/images/Nomad-logo-black.png'}
            alt="Logo"
            width={30}
            height={30}
          />
        )}
        <div className="text-medium hidden md:block">
          Welcome Back, <span className="text-purple font-bold">User</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="h-[35px] min-w-[35px] rounded-full"
        >
          <FaBell className="text-gray-400" />
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            document.documentElement.classList.toggle('dark');
          }}
          className="h-[35px] min-w-[35px] rounded-full"
        >
          {isDarkMode ? (
            <FaMoon className="text-gray-400" />
          ) : (
            <FaSun className="text-gray-400" />
          )}
        </Button>
        <div className="h-7 w-px rounded-full bg-gray-400 lg:hidden"></div>
        <Button
          variant="outline"
          onClick={toggleSidebar}
          className="h-[35px] min-w-[35px] rounded-full lg:hidden"
        >
          <GiHamburgerMenu />
        </Button>
      </div>
    </div>
  );
};

export default Topbar;

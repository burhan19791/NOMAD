'use client';

import React, { useState } from 'react';
import Topbar from './topbar';
import SideBar from './side-bar';
import { usePathname } from 'next/navigation';

const TopbarSidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Array of routes where you want to hide sidebar/topbar
  const hideRoutes = ['/auth-page'];

  if (hideRoutes.includes(pathname)) return null; // skip rendering

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xs lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <Topbar toggleSidebar={() => setIsOpen(!isOpen)} />
      <SideBar isOpen={isOpen} />
    </div>
  );
};

export default TopbarSidebarLayout;

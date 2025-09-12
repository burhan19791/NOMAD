'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaShoppingBag,
  FaShoppingCart,
  FaCalendarAlt,
  FaLock,
  FaTags,
  FaTruckMoving,
} from 'react-icons/fa';
import { RiSpyFill } from 'react-icons/ri';
import { TbLayoutDashboardFilled, TbLayoutKanbanFilled } from 'react-icons/tb';
import { HiOutlineChevronUpDown } from 'react-icons/hi2';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import SideBarExpandableLink from './navbar-expandable-link';
import { IoPerson } from 'react-icons/io5';
import { FaFileLines } from 'react-icons/fa6';
import { IoIosStats } from 'react-icons/io';
import { MdCategory } from 'react-icons/md';
import { BiSolidDetail } from 'react-icons/bi';

type Props = {
  isOpen: boolean;
};

const SideBar = ({ isOpen }: Props) => {
  const [activeLink, setActiveLink] = useState<string>('dashboard');

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`bg-card-background fixed top-0 z-50 min-h-screen w-64 -translate-x-full flex-col p-4 pt-7 font-medium transition-all duration-300 lg:flex lg:w-20 lg:translate-x-0 xl:w-64 xl:p-7 xl:pl-5 ${isOpen ? 'translate-x-0' : '-translate-x-full'} `}
      >
        {/* logo small show thing */}
        <div className="mb-5 flex items-center gap-1.5 md:mb-8 xl:mb-8">
          <div className="relative top-0 right-0 mt-0.5 hidden h-8 w-8 lg:block lg:h-12 lg:w-12 xl:hidden">
            {isDark ? (
              <Image
                className="cursor-pointer"
                src={'/images/tork-t-symbol.svg'}
                alt="Logo"
                fill
              />
            ) : (
              <Image
                className="cursor-pointer"
                src={'/images/tork-symbol-logo.svg'}
                alt="Logo"
                fill
              />
            )}
          </div>
          <div className="relative ml-2 h-14 w-30 lg:hidden xl:block">
            {isDark ? (
              <Image src={'/images/tork-dark-logo.svg'} alt="Logo" fill />
            ) : (
              <Image src={'/images/tork-light-logo.svg'} alt="Logo" fill />
            )}
          </div>
        </div>
        <div className="text-font-light font-regular flex h-[550px] flex-col gap-4 overflow-y-scroll">
          {/* Dashboard */}
          <div>
            <Link
              href="/"
              onClick={() => setActiveLink('dashboard')}
              className={clsx(
                'hover:text-purple flex items-center gap-2.5 rounded-md p-2.5 pl-3 transition-all',
                activeLink === 'dashboard' &&
                  'bg-purple text-white hover:text-white',
              )}
            >
              <TbLayoutDashboardFilled className="text-2xl xl:text-lg" />
              <p className="lg:hidden xl:block">Dashboard</p>
            </Link>
          </div>

          {/* E-commerce Section */}
          <div className="space-y-1">
            <div className="px-3 py-2 sm:block md:block lg:hidden xl:block">
              <h3 className="text-font-light text-xs font-semibold tracking-wider uppercase">
                E-commerce
              </h3>
            </div>
            <SideBarExpandableLink
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              mainLabel="Products"
              mainIcon={<FaShoppingBag />}
              items={[
                { label: 'List View', route: '/products/list' },
                { label: 'Overview', route: '/products/overview' },
                { label: 'Create Product', route: '/products/create' },
              ]}
            />
            <SideBarExpandableLink
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              mainLabel="Orders"
              mainIcon={<FaShoppingCart />}
              items={[
                { label: 'List View', route: '/orders/list' },
                { label: 'OverView', route: '/orders/overview' },
              ]}
            />
            <SideBarExpandableLink
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              mainLabel="Shipping"
              mainIcon={<FaTruckMoving />}
              items={[
                { label: 'List View', route: '/shipping/list' },
                { label: 'Shipments', route: '/shipping/shipments' },
              ]}
            />
            <SideBarExpandableLink
              activeLink={activeLink}
              setActiveLink={setActiveLink}
              mainLabel="Invoices"
              mainIcon={<FaFileLines />}
              items={[
                { label: 'List View', route: '/invoice/list' },
                { label: 'Overview', route: '/invoice/overview' },
              ]}
            />
            <div>
              <Link
                href="/customers"
                onClick={() => setActiveLink('customers')}
                className={clsx(
                  'hover:text-purple flex items-center gap-2.5 rounded-md p-2.5 pl-3 transition-all',
                  activeLink === 'customers' &&
                    'bg-purple text-white hover:text-white',
                )}
              >
                <IoPerson className="text-lg md:text-2xl xl:text-lg" />
                <p className="lg:hidden xl:block">Customers</p>
              </Link>
            </div>
            <div>
              <Link
                href="/coupons"
                onClick={() => setActiveLink('coupons')}
                className={clsx(
                  'hover:text-purple flex items-center gap-2.5 rounded-md p-2.5 pl-3 transition-all',
                  activeLink === 'coupons' &&
                    'bg-purple text-white hover:text-white',
                )}
              >
                <FaTags className="text-lg md:text-2xl xl:text-lg" />
                <p className="lg:hidden xl:block">Coupons</p>
              </Link>
            </div>
            <div>
              <Link
                href="/sellers"
                onClick={() => setActiveLink('sellers')}
                className={clsx(
                  'hover:text-purple flex items-center gap-2.5 rounded-md p-2.5 pl-3 transition-all',
                  activeLink === 'sellers' &&
                    'bg-purple text-white hover:text-white',
                )}
              >
                <RiSpyFill className="text-lg md:text-2xl xl:text-lg" />
                <p className="lg:hidden xl:block">Sellers</p>
              </Link>
            </div>
          </div>

          {/* Analytics */}
          <div className="space-y-1">
            <div className="px-3 py-2 sm:block md:block lg:hidden xl:block">
              <h3 className="text-font-light text-xs font-semibold tracking-wider uppercase">
                Analytics
              </h3>
            </div>
            <div>
              <Link
                href="/analytics"
                onClick={() => setActiveLink('analytics')}
                className={clsx(
                  'hover:text-purple flex items-center gap-2.5 rounded-md p-2.5 pl-3 transition-all',
                  activeLink === 'analytics' &&
                    'bg-purple text-white hover:text-white',
                )}
              >
                <IoIosStats className="text-lg md:text-2xl xl:text-lg" />
                <p className="lg:hidden xl:block">Analytics</p>
              </Link>
            </div>
          </div>

          {/* Apps */}
          <div className="space-y-1">
            <div className="px-3 py-2 sm:block md:block lg:hidden xl:block">
              <h3 className="text-font-light text-xs font-semibold tracking-wider uppercase">
                Apps
              </h3>
            </div>
            <div>
              <Link
                href="/calendar"
                onClick={() => setActiveLink('calendar')}
                className={clsx(
                  'hover:text-purple flex items-center gap-2.5 rounded-md p-2.5 pl-3 transition-all',
                  activeLink === 'calendar' &&
                    'bg-purple text-white hover:text-white',
                )}
              >
                <FaCalendarAlt className="text-lg md:text-2xl xl:text-lg" />
                <p className="lg:hidden xl:block">Calendar</p>
              </Link>
            </div>
            <div>
              <Link
                href="/kanban"
                onClick={() => setActiveLink('kanban')}
                className={clsx(
                  'hover:text-purple flex items-center gap-2.5 rounded-md p-2.5 pl-3 transition-all',
                  activeLink === 'kanban' &&
                    'bg-purple text-white hover:text-white',
                )}
              >
                <TbLayoutKanbanFilled className="text-lg md:text-2xl xl:text-lg" />
                <p className="lg:hidden xl:block">Kanban</p>
              </Link>
            </div>
          </div>

          {/* Set Up */}
          <div className="space-y-1">
            <div className="px-3 py-2 sm:block md:block lg:hidden xl:block">
              <h3 className="text-font-light text-xs font-semibold tracking-wider uppercase">
                Set Up
              </h3>
            </div>
            <div>
              <Link
                href="/categories"
                onClick={() => setActiveLink('categories')}
                className={clsx(
                  'hover:text-purple flex items-center gap-2.5 rounded-md p-2.5 pl-3 transition-all',
                  activeLink === 'categories' &&
                    'bg-purple text-white hover:text-white',
                )}
              >
                <MdCategory className="text-lg md:text-2xl xl:text-lg" />
                <p className="lg:hidden xl:block">Categories</p>
              </Link>
            </div>
            <div>
              <Link
                href="/attributes"
                onClick={() => setActiveLink('attributes')}
                className={clsx(
                  'hover:text-purple flex items-center gap-2.5 rounded-md p-2.5 pl-3 transition-all',
                  activeLink === 'attributes' &&
                    'bg-purple text-white hover:text-white',
                )}
              >
                <BiSolidDetail className="text-lg md:text-2xl xl:text-lg" />
                <p className="lg:hidden xl:block">Attributes</p>
              </Link>
            </div>
            <div>
              <Link
                href="/auth-page"
                onClick={() => setActiveLink('auth')}
                className={clsx(
                  'hover:text-purple flex items-center gap-2.5 rounded-md p-2.5 pl-3 transition-all',
                  activeLink === 'auth' &&
                    'bg-purple text-white hover:text-white',
                )}
              >
                <FaLock className="text-lg md:text-2xl xl:text-lg" />
                <p className="lg:hidden xl:block">Auth</p>
              </Link>
            </div>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="dark:bg-inner-card mt-20 lg:mt-auto flex w-full items-center gap-2 rounded-md bg-gray-100 p-2.5 focus:outline-none">
              <div className="h-8 min-w-8 flex-shrink-0 rounded-lg bg-gray-300 dark:bg-gray-700" />

              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col text-left lg:hidden xl:flex xl:flex-col">
                  <p className="text-font-primary mb-1 text-sm leading-none font-bold">
                    User Name
                  </p>
                  <p className="text-font-light text-xs leading-none tracking-widest uppercase">
                    Owner
                  </p>
                </div>
                <HiOutlineChevronUpDown className="text-font-light block text-xl lg:hidden xl:block" />
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 py-2"
            side="top" // dropdown appears above the trigger
            align="start" // align right edge of dropdown to right edge of trigger
            sideOffset={10} // 8px gap from the trigger
            alignOffset={50}
          >
            <div className="flex items-center gap-2 p-2 px-4">
              <div className="h-8 min-w-8 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
              <div className="text-left">
                <p className="text-font-primary mb-1 text-sm leading-none font-bold">
                  User Name
                </p>
                <p className="text-font-light text-xs leading-none tracking-widest uppercase">
                  Owner
                </p>
              </div>
            </div>

            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Preferences</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>App Settings</DropdownMenuLabel>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Privacy</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel>Team And Collaboration</DropdownMenuLabel>
              <DropdownMenuItem>Manage Members</DropdownMenuItem>
              <DropdownMenuItem>Invite People</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
};

export default SideBar;

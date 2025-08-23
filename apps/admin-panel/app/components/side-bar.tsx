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
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';
import SideBarExpandableLink from './navbar-expandable-link';
import { IoPerson } from 'react-icons/io5';
import { FaFileLines } from 'react-icons/fa6';
import { IoIosStats } from 'react-icons/io';

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
        className={`bg-card-background fixed top-0 z-50 min-h-screen w-64 -translate-x-full flex-col p-4 pt-7 font-medium transition-all duration-300 lg:flex lg:w-20 lg:translate-x-0 xl:w-64 xl:p-10 xl:pl-5 ${isOpen ? 'translate-x-0' : '-translate-x-full'} `}
      >
        {/* logo small show thing */}
        <div className="mb-10 flex items-center gap-1.5">
          <div className="relative top-0 right-0 mt-0.5 h-8 w-8 lg:h-12 lg:w-12 xl:h-8 xl:w-8">
            {isDark ? (
              <Image src={'/images/Nomad-logo-white.png'} alt="Logo" fill />
            ) : (
              <Image src={'/images/Nomad-logo-black.png'} alt="Logo" fill />
            )}
          </div>
          <h1 className="text-font-primary block text-3xl font-bold lg:hidden xl:block">
            NOMAD
          </h1>
        </div>
        <div className="text-font-light font-regular flex h-[550px] flex-col gap-4 overflow-y-scroll">
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
          <SideBarExpandableLink
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            mainLabel="Products"
            mainIcon={<FaShoppingBag />}
            items={[
              { label: 'List View', route: '/products/list' },
              { label: 'Grid View', route: '/products/grid' },
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="dark:hover:bg-inner-card dark:bg-inner-card mt-auto flex w-full items-center gap-2 rounded-md p-2.5 hover:bg-gray-100 focus:outline-none">
              <div className="h-8 min-w-8 flex-shrink-0 rounded-lg bg-gray-300 dark:bg-gray-700" />

              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col text-left lg:hidden xl:flex xl:flex-col">
                  <p className="text-font-primary mb-1 text-sm leading-none font-bold">
                    Burhan Shah
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
            side="top" // dropdown appears above the trigger
            align="start" // align right edge of dropdown to right edge of trigger
            sideOffset={10} // 8px gap from the trigger
            alignOffset={50}
            className="bg-inner-card dark:border-inner-card w-56 border border-gray-200 px-2.5 py-2"
          >
            <div className="flex items-center gap-2 p-2">
              <div className="h-8 min-w-8 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
              <div className="text-left">
                <p className="text-font-primary mb-1 text-sm leading-none font-bold">
                  Burhan Shah
                </p>
                <p className="text-font-light text-xs leading-none tracking-widest uppercase">
                  Owner
                </p>
              </div>
            </div>

            <DropdownMenuGroup className="text-font-primary">
              <DropdownMenuItem className="mt-2 -mb-1 text-xs" disabled>
                My Account
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:hover:bg-card-background hover:bg-gray-100">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:hover:bg-card-background hover:bg-gray-100">
                Preferences
              </DropdownMenuItem>

              <DropdownMenuSeparator className="border-gray-200 dark:border-gray-700" />
              <DropdownMenuItem className="mt-2 -mb-1 text-xs" disabled>
                App Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:hover:bg-card-background hover:bg-gray-100">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:hover:bg-card-background hover:bg-gray-100">
                Privacy
              </DropdownMenuItem>
              <DropdownMenuItem className="mt-2 -mb-1 text-xs" disabled>
                Team And Collaboration
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-gray-200 dark:border-gray-700" />
              <DropdownMenuItem className="dark:hover:bg-card-background hover:bg-gray-100">
                Team
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:hover:bg-card-background hover:bg-gray-100">
                Manage Members
              </DropdownMenuItem>
              <DropdownMenuItem className="dark:hover:bg-card-background hover:bg-gray-100">
                Invite People
              </DropdownMenuItem>
              <DropdownMenuItem className="mt-2 -mb-1 text-xs" disabled />
              <DropdownMenuSeparator className="border-gray-200 dark:border-gray-700" />
              <DropdownMenuItem className="dark:hover:bg-card-background hover:bg-gray-100">
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
};

export default SideBar;

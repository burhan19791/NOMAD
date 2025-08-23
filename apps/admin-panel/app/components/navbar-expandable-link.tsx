'use client';

import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import clsx from 'clsx';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

type MenuItem = {
  label: string;
  route: string;
};

type HoverMenuProps = {
  activeLink: string;
  setActiveLink: (link: string) => void;
  mainLabel: string; // top-level label e.g. "Products"
  mainIcon?: React.ReactNode; // optional icon to display next to label
  items: MenuItem[];
};

const SideBarExpandableLink = ({
  activeLink,
  setActiveLink,
  mainLabel,
  mainIcon,
  items,
}: HoverMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null,
  );
  const [subLinkSelected, setSubLinkSelected] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const el = document.createElement('div');
    document.body.appendChild(el);
    setPortalContainer(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);
  const isHoverEnabled = () => {
    if (typeof window === 'undefined') return false;
    const width = window.innerWidth;
    return width >= 1024 && width < 1280; // only lg, exclude xl and above
  };

  const handleMouseEnter = () => {
    if (!isHoverEnabled()) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isHoverEnabled()) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const buttonRect = buttonRef.current?.getBoundingClientRect();

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        onClick={() => setActiveLink(mainLabel.toLowerCase())}
        className="hover:text-purple w-full rounded-md p-2.5 pl-3 transition-all"
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="hover:text-purple text-font-light flex items-center gap-2.5"
        >
          {mainIcon && (
            <span className="text-2xl md:flex md:text-2xl xl:text-lg">
              {mainIcon}
            </span>
          )}
          <div className="flex items-center gap-3 lg:hidden xl:flex">
            {mainLabel}
            {isOpen ? (
              <FaChevronDown className="text-xs" />
            ) : (
              <FaChevronRight className="text-xs" />
            )}
          </div>
        </div>

        {isOpen && (
          <div className="text-font-light mt-3 ml-7 flex flex-col gap-2 text-left text-sm lg:hidden xl:flex xl:flex-col xl:gap-2">
            {items.map((item) => (
              <div
                key={item.label}
                onClick={() => {
                  setSubLinkSelected(item.label.toLowerCase());
                  router.push(item.route);
                }}
                className={clsx(
                  'hover:text-purple',
                  subLinkSelected === item.label.toLowerCase() &&
                    'text-purple font-semibold',
                )}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </button>

      {isOpen && portalContainer && buttonRect
        ? createPortal(
            <div
              style={{
                position: 'absolute',
                top: buttonRect.top + window.scrollY + 'px',
                left: buttonRect.right + 8 + window.scrollX + 'px',
                zIndex: 999999,
                minWidth: '160px',
              }}
              className="bg-inner-card text-font-light hidden flex-col gap-3 rounded-md p-4 shadow-xl lg:flex xl:hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-card-background absolute top-3 -left-1 h-3 w-3 rotate-45 shadow-md"></div>
              <div className="text-font-primary flex text-sm font-medium xl:hidden">
                {mainLabel}
              </div>

              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.route}
                  onClick={() => setActiveLink(item.route)}
                  className={clsx(
                    'hover:text-purple transition',
                    activeLink === item.route && 'text-purple font-semibold',
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>,
            portalContainer,
          )
        : null}
    </div>
  );
};

export default SideBarExpandableLink;

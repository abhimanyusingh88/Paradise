"use client"
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import SignOutButton from './SignOutButton';
import { usePathname } from 'next/navigation';
const navLinks = [
  {
    name: 'Home',
    href: '/account',
    icon: <HomeIcon className='h-5 w-5 text-primary-600' />,
  },
  {
    name: 'Reservations',
    href: '/account/reservations',
    icon: <CalendarDaysIcon className='h-5 w-5 text-primary-600' />,
  },
  {
    name: 'Profile',
    href: '/account/profile',
    icon: <UserIcon className='h-5 w-5 text-primary-600' />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  return (
    <nav className='border-b md:border-b-0 md:border-r border-primary-900'>
      <ul className='grid grid-cols-3 md:flex md:flex-col gap-2 h-full text-lg'>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex flex-col md:flex-row items-center gap-2 md:gap-4 font-semibold text-primary-200 ${pathname === link.href ? "bg-primary-900" : ""} `}
              href={link.href}
            >
              {link.icon}
              <span className="text-sm md:text-lg">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className='mt-auto hidden md:block'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;

import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/20/solid';
import {
    HomeIcon,
    MoonIcon,
  } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/solid';
 import Link from 'next/link';
      
 const links = [
    { name: 'Home', href: '/', icon: HomeIcon }, 
    { name: 'Dashboard', href: '/dashboard', icon: ChatBubbleBottomCenterTextIcon }, 
    { name: 'Invoices', href: '/dashboard/invoices', icon: SunIcon }, 
    { name: 'Customers', href: '/dashboard/customers', icon: MoonIcon }, 
  ];

  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
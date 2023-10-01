'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type Props = {
  href: string;
  children: React.ReactNode;
};

export const ActiveLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(`text-blue-400 hover:text-blue-600`, { underline: isActive })}
      {...(isActive && { 'aria-current': true })}
    >
      {children}
    </Link>
  );
};

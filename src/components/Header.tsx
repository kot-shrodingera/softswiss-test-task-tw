import { type AnchorHTMLAttributes, useState } from 'react'

import CartIcon from '@/assets/icons/cart.svg?react'
import CloseIcon from '@/assets/icons/close.svg?react'
import GoLogoIcon from '@/assets/icons/goLogo.svg?react'
import LogoIcon from '@/assets/icons/logo.svg?react'
import MenuIcon from '@/assets/icons/menu.svg?react'
import { cn } from '@/lib/utils'

function NavLink({
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        'cursor-pointer text-lg font-bold no-underline hover:bg-navLinkGradient hover:bg-clip-text hover:text-transparent [&_path]:hover:fill-[url(#gradient)]',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

const links = [
  {
    id: 'home',
    path: '#',
    text: 'Home',
  },
  {
    id: 'products',
    path: '#',
    text: 'Products',
  },
  {
    id: 'cart',
    path: '#',
    text: <CartIcon />,
  },
]

const links2 = [
  {
    id: 'home2',
    path: '#',
    text: 'Home',
  },
  {
    id: 'products2',
    path: '#',
    text: 'Products',
  },
  {
    id: 'cart2',
    path: '#',
    text: <CartIcon />,
  },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 flex h-[48px] bg-black md:h-[80px]">
      <div className="container flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-[4px] text-pink lg:gap-[6px]">
          <LogoIcon className="size-[24px] lg:size-[36px]" />
          <GoLogoIcon className="h-[17px] w-[43px] lg:h-[25px] lg:w-[63px]" />
        </div>
        <div className="hidden flex-row gap-[56px] md:flex">
          {links.map(({ id, path, text }) => (
            <NavLink key={id} href={path}>
              {text}
            </NavLink>
          ))}
        </div>
        <MenuIcon
          className="cursor-pointer md:hidden"
          onClick={() => {
            setIsMenuOpen((value) => !value)
          }}
        />
        <div
          className={cn(
            'fixed inset-0 flex flex-col items-center gap-[56px] bg-black p-[16px] transition-transform',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <CloseIcon
            className="absolute right-[20px] top-[5px] cursor-pointer"
            onClick={() => {
              setIsMenuOpen((value) => !value)
            }}
          />
          {links2.map(({ id, path, text }) => (
            <NavLink key={id} href={path}>
              {text}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Header

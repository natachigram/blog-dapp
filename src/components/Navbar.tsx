import React from 'react';
import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-12 gap-10'>
      <div>
        Blog <span>Dapp</span>
      </div>
      <div className='links px-8'>
        <div className='link-items flex justify-center items-center gap-4'>
          <Link href='/'>Home</Link>
          <Link href='/'>Contact</Link>
          <div>
            <ConnectButton />
          </div>
        </div>
      </div>
      <form>
        <input
          className='border-2 border-black rounded-md px-4 py-1'
          type='search'
          placeholder='Search'
        />
      </form>
    </nav>
  );
};

export default Navbar;

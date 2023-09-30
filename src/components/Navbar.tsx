import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center h-12 gap-10'>
      <div>
        Blog <span>Dapp</span>
      </div>
      <div className='links w-48'>
        <div className='link-items flex justify-center items-center gap-4'>
          <Link href='/'>Home</Link>
          <Link href='/'>Contact</Link>
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

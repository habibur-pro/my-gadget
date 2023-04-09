import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className='flex px-5 md:px-24 py-5 bg-cyan-100 justify-between items-center'>
            <div className='inline-flex items-center'>
                <div className='bg-cyan-200 p-3 rounded-full'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 32 32'
                        fill='currentColor'
                        className='flex-shrink-0 w-5 h-5 rounded-full text-cyan-600'
                    >
                        <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
                    </svg>
                </div>
                <span className='font-bold text-2xl text-slate-700 ms-4'>HeroGadget</span>
            </div>
            <ul className='hidden md:flex items-center'>
                <li>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? 'active' : 'default'}
                    >Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/books'
                        className={({ isActive }) => isActive ? 'active' : 'default'}
                    >Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/about'
                        className={({ isActive }) => isActive ? 'active' : 'default'}
                    >About Us
                    </NavLink>

                </li>
                <li>
                    <Link to='/cart'>
                        <ShoppingCartIcon
                            className='h-6 w-6 text-cyan-400'

                        />
                    </Link>
                </li>
            </ul>


            <div className='md:hidden'>
                <Bars3Icon className='h-6 w-6 text-black' onClick={() => setIsMenuOpen(true)} />
            </div>


            {
                isMenuOpen && (
                    <div className='absolute border shadow top-2 left-2 duration-400 right-2  mx-auto bg-white  px-3 py-5'>
                        <div className='flex items-center justify-between'>
                            <div className='inline-flex items-center'>
                                <div className='bg-cyan-200 p-3 rounded-full'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 32 32'
                                        fill='currentColor'
                                        className='flex-shrink-0 w-5 h-5 rounded-full text-cyan-600'
                                    >
                                        <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
                                    </svg>
                                </div>
                                <span className='font-bold text-2xl text-slate-700 ms-4'>HeroGadget</span>
                            </div>
                            <XMarkIcon className='h-6 w-6 text-black' onClick={() => setIsMenuOpen(false)} />
                        </div>
                        <div className='mt-4'>
                            <ul className=''>
                                <li className='py-2'>
                                    <NavLink to='/'
                                        className={({ isActive }) => isActive ? 'active' : 'default'}
                                    >Home
                                    </NavLink>
                                </li>
                                <li className='py-2'>
                                    <NavLink to='/books'
                                        className={({ isActive }) => isActive ? 'active' : 'default'}
                                    >Shop
                                    </NavLink>
                                </li>
                                <li className='py-2'>
                                    <NavLink to='/about'
                                        className={({ isActive }) => isActive ? 'active' : 'default'}
                                    >About Us
                                    </NavLink>

                                </li>
                                <li className='py-2'>
                                    <Link to='/cart'>
                                        <ShoppingCartIcon
                                            className='h-6 w-6 text-cyan-400'

                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </nav>
    );
};

export default Header;
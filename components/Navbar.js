/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link';
import Image from 'next/image'
import {
    MenuIcon,
    HomeIcon,
    XIcon,
    GlobeIcon,
    AcademicCapIcon, ChartBarIcon, ChevronDownIcon
} from '@heroicons/react/outline'
const Navlink = [
    {
        name: 'Trang Chủ',
        href: '/',
        path:'/',
    },
    {
        name: 'Thiên Văn',
        href: '/planetary',
        path:'/planetary`',
    },
    {
        name: 'Trích Dẫn',
        href: '/quote',
        path:'/quote',
    },
    {
        name: 'Pokemon',
        href: '/pokemon',
        path:'/pokemon',
    },

]
const NavlinkM = [
    {
        name: 'Trang Chủ',
        href: '/',
        path:'/',
        icon: HomeIcon,
    },
    {
        name: 'Thiên Văn',
        href: '/planetary',
        path:'/planetary',
        icon: GlobeIcon,
    },
    {
        name: 'Trích Dẫn',
        href: '/quote',
        path:'/quote',
        icon: AcademicCapIcon,
    },
    {
        name: 'Pokemon',
        href: '/pokemon',
        path:'/pokemon',
        icon: AcademicCapIcon,
    },
]
const solutions = [
    {
        name: 'Pokemon',
        href: '/pokemon',
        path: '/pokemon',
        icon: AcademicCapIcon
    }
    ,
    {
        name: 'Marvel',
        href: '/marvel',
        path:'/marvel',
        icon: AcademicCapIcon,
    },

]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                className="h-8 w-auto sm:h-10"
                                src={`https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg`}
                                alt="My Logo"
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">


                        {Navlink.map((item) => (
                            <Link
                                passHref
                                key={item.name}
                                href={item.href}
                               >
                                <a  className="text-base font-medium text-gray-500 hover:text-gray-900"> {item.name}</a>
                            </Link>
                        ))}
                        {/*<Popover className="relative">*/}
                        {/*    {({ open }) => (*/}
                        {/*        <>*/}
                        {/*            <Popover.Button*/}
                        {/*                className={classNames(*/}
                        {/*                    open ? 'text-gray-900' : 'text-gray-500',*/}
                        {/*                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'*/}
                        {/*                )}*/}
                        {/*            >*/}
                        {/*                <span>Giải Trí</span>*/}
                        {/*                <ChevronDownIcon*/}
                        {/*                    className={classNames(*/}
                        {/*                        open ? 'text-gray-600' : 'text-gray-400',*/}
                        {/*                        'ml-2 h-5 w-5 group-hover:text-gray-500'*/}
                        {/*                    )}*/}
                        {/*                    aria-hidden="true"*/}
                        {/*                />*/}
                        {/*            </Popover.Button>*/}

                        {/*            <Transition*/}
                        {/*                as={Fragment}*/}
                        {/*                enter="transition ease-out duration-200"*/}
                        {/*                enterFrom="opacity-0 translate-y-1"*/}
                        {/*                enterTo="opacity-100 translate-y-0"*/}
                        {/*                leave="transition ease-in duration-150"*/}
                        {/*                leaveFrom="opacity-100 translate-y-0"*/}
                        {/*                leaveTo="opacity-0 translate-y-1"*/}
                        {/*            >*/}
                        {/*                <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">*/}
                        {/*                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">*/}
                        {/*                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">*/}
                        {/*                            {solutions.map((item) => (*/}
                        {/*                                <Link*/}
                        {/*                                    key={item.name}*/}
                        {/*                                    href={item.href}*/}

                        {/*                                >*/}
                        {/*                                    <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">*/}
                        {/*                                        <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />*/}
                        {/*                                        <div className="ml-4">*/}
                        {/*                                            <p className="text-base font-medium text-gray-900">{item.name}</p>*/}
                        {/*                                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>*/}
                        {/*                                        </div>*/}
                        {/*                                    </a>*/}
                        {/*                                </Link>*/}
                        {/*                            ))}*/}
                        {/*                        </div>*/}

                        {/*                    </div>*/}
                        {/*                </Popover.Panel>*/}
                        {/*            </Transition>*/}
                        {/*        </>*/}
                        {/*    )}*/}
                        {/*</Popover>*/}

                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Đăng Nhập
                        </a>
                        <a
                            href="#"
                            className="ml-8  inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-700"
                        >
                            Đăng Ký
                        </a>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        className="h-10 w-auto"
                                        src="https://uploads-ssl.webflow.com/612a3d9cd9c35344a2460d68/61b2181355e88e77082f397d_Myloc.svg"
                                        alt="My Logo"

                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {NavlinkM.map((item) => (
                                        <Link
                                            passHref
                                            key={item.name}
                                            href={item.href}
                                           >
                                            <a>
                                                <Popover.Button  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                    <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                                </Popover.Button>
                                            </a>


                                        </Link>
                                    ))}

                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <a
                                    href="#"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                    Đăng Ký
                                </a>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Đã Có Tài Khoản?{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Đăng Nhập
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/bash-seeklogo.png'
import { ThemeToggle } from '@/components/ui/themeToogle'
import { authClient } from '@/lib/auth-client'
import { buttonVariants } from '@/components/ui/button'
import { UserDropdown } from './userdropdown'

const navigationItems =[
    { name: "Home", href: "/"},
    { name:"Courses", href: "/courses"},
    { name:"Dashboard", href:"/admin"}
]

function Navber() {
    const { data: session, isPending } = authClient.useSession()
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60' >

        <div className='container flex min-h-6 items-center mx-auto px-4 md:px-6 lg:px-8 py-4 '>
            <Link href="/" className='flex items-center space-x-2 mr-4 '> 
            <Image className='size-9 ' src={Logo} alt="Logo " width={100} height={100}></Image>
            <span className='font-bold'>Radwan-LMS</span>
            
            </Link>
            <nav className=' hidden md:flex md:flex-1 md:justify-between md:items-center'>
                <div>
                    {navigationItems.map((item, index) =>(
                        <Link key={index} href={item.href} className='ml-4 text-sm font-medium text-muted-foreground hover:text-foreground'>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className='flex items-center space-x-4'>
                    <ThemeToggle />
                    {
                        isPending ? null : session ? (
                            <UserDropdown email={session.user.email} name={session.user.name} image={session.user.image || ""} />
                        ):(
                            <>
                                <Link href="/login" className={buttonVariants({variant:"secondary"})}>
                                Login
                                </Link>
                                <Link href="/login" className={buttonVariants()}>
                                Get Started
                                </Link>
                            </>
                        )
                    }
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Navber
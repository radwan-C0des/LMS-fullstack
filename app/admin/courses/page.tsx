import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
        <div className='flex justify-between items-center '>
            <h1 className='text-2xl font-bold '>Your Courses</h1>
            <Link className={buttonVariants()} href="/admin/courses/create">
                Create Course
            </Link>
        </div>

        <div>
            <h1>Hear you will see all the Courses</h1>
        </div>
    </>
  )
}

export default page
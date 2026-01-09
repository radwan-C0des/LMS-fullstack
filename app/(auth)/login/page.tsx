

import React from 'react'
import { LoginForm } from './_components/loginform'
import { headers } from 'next/headers'
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';


async function  LoginPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session){
    return redirect("/")

  }
  
    return (
      <LoginForm />
    )
  }


  export default LoginPage
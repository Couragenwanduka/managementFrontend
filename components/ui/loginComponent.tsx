'use client'
import React, { useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import loginSchema from '@/schema/loginValidationSchema'; 
import Button from '../button';
import Text from '../text';
import { EyeOff } from 'lucide-react';
import { Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <section className="md:w-[40%] w-[90%] h-[50%] rounded-xl bg-white/5 border border-white/20 backdrop-blur-md shadow-md">
        <Formik 
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={loginSchema}
            onSubmit={() => router.push('/project/dashboard')}
        >
            {() => (
                <Form className='flex flex-col justify-center items-center w-full md:mt-8 mt-20'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Text variant={'heading'} className='text-white/70'>
                            Welcome Back
                        </Text>
                        <Text className='text-sm text-white/60'>
                            Your workspace missed you. Let’s get back to it.
                        </Text>
                    </div>

                    {/* Email Field */}
                    <div className='flex flex-col w-full h-14 mt-5'>
                        <div className='w-full flex justify-center items-center'>
                            <Field
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='bg-border/50 w-[90%] h-11 rounded-lg pl-6 outline-none focus:outline-none text-black placeholder:text-black'
                            />
                        </div>
                        <ErrorMessage name='email' component='div' className='text-danger text-sm mt-1 ml-[7%] w-[90%]' />
                    </div>

                    {/* Password Field with Toggle */}
                    <div className='flex flex-col w-full justify-center items-center h-14 mt-3'>
                        {/* Input and Show button container */}
                        <div className="relative w-[90%] h-12">
                            <Field
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            placeholder='Password'
                            className='bg-border/50 w-full h-11 rounded-lg pl-6 pr-12 outline-none focus:outline-none placeholder:text-black'
                            />
                            <button
                            type='button'
                            onClick={() => setShowPassword(prev => !prev)}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-sm text-accent font-medium'
                            >
                            {showPassword ? <EyeOff/> : <Eye/>}
                            </button>
                        </div>
                        
                        {/* Error message below the input */}
                        <ErrorMessage name='password' component='div' className='text-danger text-sm mt-1 ml-[5%] w-[90%]' />
                    </div>
                    <div className='w-full flex justify-center items-center mt-4'>
                        <Button variant='accent' className='cursor-pointer w-[60%] rounded-3xl'> 
                            Submit
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
   </section>
  )
}

export default LoginComponent;

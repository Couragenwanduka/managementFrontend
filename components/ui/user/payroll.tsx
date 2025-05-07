/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup'; // Import Yup for validation
import Button from '@/components/button';

// Define Payroll type
type Payroll = {
  id: number;
  month: string;
  amount: number;
  status: 'Paid' | 'Pending';
};

// Validation Schema using Yup
const payrollSchema = Yup.object().shape({
  month: Yup.string().required('Month is required'),
  reason: Yup.string().required('Reason is required'),
});

export default function UserPayrollPage() {
  const [payrolls, setPayrolls] = useState<Payroll[]>([
    { id: 1, month: 'April 2025', amount: 150000, status: 'Paid' },
    { id: 2, month: 'March 2025', amount: 150000, status: 'Paid' },
    { id: 3, month: 'February 2025', amount: 150000, status: 'Pending' },
  ]);

  const router = useRouter();

  return (
    <div className='max-w-4xl mx-auto p-6 h-screen overflow-y-auto hide-scrollbar'>
      <h1 className='text-2xl font-bold text-primary mb-6'>Your Payroll</h1>

      {/* Request Form */}
      <section className='w-[100%] h-auto rounded-xl bg-white/5 border border-white/20 backdrop-blur-md shadow-md'>
        <Formik
          initialValues={{
            month: '',
            reason: '',
          }}
          validationSchema={payrollSchema}
          onSubmit={(values, { resetForm }) => {
            console.log('Request submitted:', values);
            alert('Request submitted for review!');
            setPayrolls([
              ...payrolls,
              {
                id: payrolls.length + 1,
                month: values.month,
                amount: Math.floor(Math.random() * 50000) + 100000, // Random amount for now
                status: 'Pending',
              },
            ]);
            resetForm();
          }}
        >
          {() => (
            <Form className='flex flex-col justify-center items-center w-full'>
              <div className='flex flex-col justify-center items-center gap-2'>
                <h2 className='text-lg font-semibold text-accent'>Submit a Payroll Request</h2>
              </div>

              {/* Month Field */}
              <div className='flex flex-col w-full h-14 mt-5'>
                <div className='w-full flex justify-center items-center'>
                  <Field
                    as='select'
                    name='month'
                    className='bg-border/50 w-[90%] h-11 rounded-lg pl-6 outline-none focus:outline-none text-black'
                  >
                    <option value=''>Select Month</option>
                    <option value='April 2025'>April 2025</option>
                    <option value='March 2025'>March 2025</option>
                    <option value='February 2025'>February 2025</option>
                  </Field>
                </div>
                <ErrorMessage
                  name='month'
                  component='div'
                  className='text-danger text-sm mt-1 ml-[7%] w-[90%]'
                />
              </div>

              {/* Reason Field */}
              <div className='flex flex-col w-full justify-center items-center h-14 mt-11'>
                <div className='relative w-[90%]'>
                  <Field
                    as='textarea'
                    name='reason'
                    placeholder='State your request or concern...'
                    rows={3}
                    className='bg-border/50 w-full h-32 rounded-lg pl-6 outline-none focus:outline-none placeholder:text-black resize-none'
                  />
                </div>
                <ErrorMessage
                  name='reason'
                  component='div'
                  className='text-danger text-sm mt-1 ml-[7%] w-[90%]'
                />
              </div>

              {/* Submit Button */}
              <div className='w-full flex justify-center items-center mt-14 mb-5'>
                <Button
                 type='submit'
                  className='bg-accent text-white px-4 py-2 rounded-3xl cursor-pointer'
                >
                   Submit Request
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>

      {/* Payroll List */}
      <div className='space-y-4 mt-8'>
        <h2 className='text-lg font-semibold text-primary mb-2'>Payroll History</h2>
        {payrolls.length === 0 ? (
          <p className='text-[--color-muted] text-sm'>No payroll records found.</p>
        ) : (
          payrolls.map((entry) => (
            <div
              key={entry.id}
              className='p-4 bg-white rounded-lg shadow flex justify-between items-center border border-border'
            >
              <div>
                <h3 className='font-medium text-highlight'>{entry.month}</h3>
                <p className='text-muted text-sm'>
                  ₦{entry.amount.toLocaleString()}
                </p>
              </div>
              <span
                className={`px-3 py-1 text-sm rounded-full font-semibold ${
                  entry.status === 'Paid'
                    ? 'bg-success text-white'
                    : 'bg-yellow-200 text-yellow-800'
                }`}
              >
                {entry.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Button from '@/components/button';

// Types
type Payroll = {
  id: number;
  month: string;
  amount: number;
  status: 'Paid' | 'Pending';
};

type PayrollIssue = {
  id: number;
  month: string;
  reason: string;
  response?: string;
};

// Validation Schema
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

  const [issues, setIssues] = useState<PayrollIssue[]>([]);
  const [isAdmin, setIsAdmin] = useState(false); // Set to true for admin view

  const router = useRouter();

  return (
    <div className='max-w-4xl mx-auto p-6 h-screen overflow-y-auto hide-scrollbar'>
      <h1 className='text-2xl font-bold text-primary mb-6'>Your Payroll</h1>

      {/* Request Form */}
      <section className='w-full h-auto rounded-xl bg-white/5 border border-white/20 backdrop-blur-md shadow-md'>
        <Formik
          initialValues={{ month: '', reason: '' }}
          validationSchema={payrollSchema}
          onSubmit={(values, { resetForm }) => {
            const newId = payrolls.length + 1;
            setPayrolls([
              ...payrolls,
              {
                id: newId,
                month: values.month,
                amount: Math.floor(Math.random() * 50000) + 100000,
                status: 'Pending',
              },
            ]);
            setIssues([
              ...issues,
              {
                id: newId,
                month: values.month,
                reason: values.reason,
              },
            ]);
            resetForm();
            alert('Request submitted for review!');
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

      {/* Payroll History */}
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
                <p className='text-muted text-sm'>₦{entry.amount.toLocaleString()}</p>
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

      {/* Issue Tracker for Users */}
      {issues.length > 0 && !isAdmin && (
        <div className='mt-10'>
          <h2 className='text-lg font-semibold text-primary mb-4'>Your Submitted Issues</h2>
          {issues.map((issue) => (
            <div key={issue.id} className='p-4 bg-white/10 border border-white/20 rounded-lg mb-4'>
              <p className='text-sm mb-1'><strong>Month:</strong> {issue.month}</p>
              <p className='text-sm mb-1'><strong>Issue:</strong> {issue.reason}</p>
              <p className='text-sm'><strong>Admin Response:</strong> {issue.response || 'No response yet'}</p>
            </div>
          ))}
        </div>
      )}

      {/* Admin Panel */}
      {isAdmin && (
        <div className='mt-10'>
          <h2 className='text-lg font-semibold text-primary mb-4'>Payroll Issues</h2>
          {issues.length === 0 ? (
            <p className='text-muted'>No issues submitted yet.</p>
          ) : (
            issues.map((issue) => (
              <div key={issue.id} className='mb-4 p-4 bg-white/10 border border-white/20 rounded-lg'>
                <p className='text-sm mb-2'><strong>Month:</strong> {issue.month}</p>
                <p className='text-sm mb-2'><strong>Issue:</strong> {issue.reason}</p>
                <p className='text-sm mb-2'><strong>Response:</strong> {issue.response || 'No response yet'}</p>

                {!issue.response && (
                  <Formik
                    initialValues={{ response: '' }}
                    onSubmit={({ response }) => {
                      setIssues((prev) =>
                        prev.map((i) =>
                          i.id === issue.id ? { ...i, response } : i
                        )
                      );
                    }}
                  >
                    {() => (
                      <Form className='mt-2'>
                        <Field
                          as='textarea'
                          name='response'
                          placeholder='Enter response...'
                          rows={2}
                          className='w-full p-2 rounded-md bg-white/20 text-black placeholder:text-black resize-none'
                        />
                        <Button
                          type='submit'
                          className='mt-2 bg-accent text-white px-4 py-1 rounded-xl'
                        >
                          Send Response
                        </Button>
                      </Form>
                    )}
                  </Formik>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

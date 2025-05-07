// app/layout.tsx
import React from 'react';
import DashBoard from '@/components/ui/dashBoard';


// The layout component
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex gap-14">
      {/* Any global header or navigation can be placed here */}
      <header className='w-[19%]'>
        <DashBoard/>
      </header>
      <main className='w-[75%]'>{children}</main>
    </div>
  );
}

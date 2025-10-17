import React from 'react'

type EntriesProps = {
    children: React.ReactNode;
};

const Entries: React.FC<EntriesProps> = ({ children }) => {
  return (
    <main className='flex flex-col items-center gap-8 py-10'>
        {children}
    </main>
  )
}

export default Entries
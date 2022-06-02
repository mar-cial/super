import React from 'react'

type Props = {}

const Notfound = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 h-96'>
      <h2 className='text-5xl font-bold'>Not found!</h2>
      <p className='text-lg'>You should go back using the nav bar.</p>
    </div>
  )
}

export default Notfound
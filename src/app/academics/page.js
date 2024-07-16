import React from 'react'
import LearningAreas from './components/LearningAreas'
import Features from './components/Features'
import Overview from './components/Overview'

const Page = () => {
  return (
    <section className='flex flex-col items-center justify-center py-2 mx-auto max-w-[1430px]'>
        <Overview />
        <Features />
        <LearningAreas />
    </section>
  )
}

export default Page
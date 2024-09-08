import React from 'react'
import Navbar from '../navbar/navbar'
import Heroimg from '../../assets/strawberry.png'

const Hero = () => {
  return (
   <main className='bg-primaryDark md:py-6 md:px-12'>
    <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
        <div className='container'>
            <Navbar />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center'>
                <div className='text-white space-y-4 p-4 md:mt-0'>
                    <h1 className='text-3xl pl-6 md:pl-14'>01________</h1>
                    <h1 className='text-5xl font-bold uppercase text-shadow'>A Healthy Fruit</h1>
                    <p className='text-sm'>
                    Antioxidants in strawberries, including vitamin C, can support your immune system and may lower your chances of getting sick when you're around germs. They may also help curb inflammation, manage your blood sugar, and guard against health conditions like high cholesterol, cancer, heart disease, stroke, and diabetes.
                    </p>
                    <button className='border border-white px-5 py-2 rounded-lg'>Shop Now</button>
                </div>
                    <div>
                        <img src={Heroimg} alt='not found' className='w-[400px] img-shadow relative z-[1]'/>
                    </div>
                        <div className='md:hidden'></div>
                </div>
            </div>
                <h1 className='text-white font-bold text-shadow bottom-0 absolute w-full z-0 xl:text-[180px] md:text-[150px] sm:text-[120px] text-center'>Berries</h1>
        </section>
   </main>
  )
}

export default Hero
import React from 'react'
import BlogPage from './Blog';
export const metadata = {
  title: "Parchar Manch – Digital Marketing Blog in Hisar",
  description: "Parchar Manch, a Digital Marketing Agency in Hisar, shares blogs on SEO, social media, PPC and branding to help businesses grow online",
  alternates:{
    canonical:"https://www.parcharmanch.com/blog"
  }
};


const page = () => {
  return (
    <div className='bg-[#f2e8e1]'>
    <BlogPage/>
    </div>
  )
}

export default page
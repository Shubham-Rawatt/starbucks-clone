import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='bg-[#0e382c] text-[#ffffff] w-full mt-20'>
            <div className='flex justify-between w-5xl mx-auto pt-20'>

                <div> <Image src="/images/logo.png" alt="Starbucks logo" width={60} height={60} /> </div>
                <div>
                    <h1 className='text-lg font-semibold'>About Us</h1>
                    <ul className='flex flex-col gap-6 mt-3 text-sm'>
                        <li>Our Heritage</li>
                        <li>Coffeehouse</li>
                        <li>Our Company</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-lg font-semibold'>Responsibility</h1>
                    <ul className='flex flex-col gap-6 mt-3 text-sm' >
                        <li>Diversity</li>
                        <li>Community</li>
                        <li>Ethical Sourcing</li>
                        <li>Environmental <br />  Stewardship</li>
                        <li>Learn More</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-lg font-semibold'>Legal</h1>
                    <ul className='flex flex-col gap-6 mt-3 text-sm' >
                        <li>Disclaimer</li>
                        <li>Food Safety</li>
                        <li>Nutritional Details</li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-lg font-semibold'>Quick Links</h1>
                    <ul className='flex flex-col gap-6 mt-3 text-sm'>
                        <li> FAQs</li>
                        <li>Customer Service</li>
                        <li>Delivery</li>
                        <li>Loyalty Program Terms <br /> and Conditions</li>
                        <li>Starbucks India Mobile <br /> App Terms of Use</li>
                        <li>Personalized offer</li>
                        <li>Cookie Policy</li>
                        <li>Gift Cards</li>
                        <li>Beverage Subscription</li>
                        <li>Starbucks + 27 <br /> Bake House Store List</li>
                        <li>Cold Brew</li>
                        <li>Food & beverages at 15% <br /> off</li>
                        <li>Starbucks® Rewards <br /> Program</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

            </div>

            <div className='flex items-center px-35'>
                <div className='w-50 gap-5'>
                    <h3 className='text-2xl'>SOCIAL MEDIA</h3>
                    <div className='flex gap-6 pt-3'>
                    <FaInstagram  className='text-4xl'/>
                    <FaFacebookF className='text-4xl'/>
                    <FaXTwitter className='text-4xl'/>
                    </div>
                </div>
                <div>
                   <Image src="/images/appstore.png" alt="Banner" width={450} height={200} className="w-full h-auto" />
                   <Image src="/images/googleplay.png" alt="Banner" width={450} height={200} className="w-full h-auto" />
                </div>
            </div>

            <span className="block w-[80%] mx-auto border-t border-white opacity-50 rounded-md mt-5"></span>
            <div className="flex w-[80%] mx-auto text-[12px] justify-between items-center mb-5  ">
                <ul className="flex gap-4 pt-5">
                    <li>Web Accessibility</li> |
                    <li>Privacy Statement</li> |
                    <li>Terms of Use</li> |
                    <li>Contact Us</li>
                </ul>
                <p>© 2026 Starbucks Coffee Company. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
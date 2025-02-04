"use client"

import { Inter, Manrope, Raleway } from 'next/font/google';
import LoginPage from './components/login';
import Forms from './components/forms';

const raleway = Raleway({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
});
const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});
export default function Home() {

  return (
    <div>
      <h1 className={`${raleway.className} text-2xl`}>hehe</h1>
      <LoginPage></LoginPage>
      
      <Forms></Forms>
  
    </div>

  )
}

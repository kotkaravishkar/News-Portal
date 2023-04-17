import React from 'react'
import '../styles/globals.css'
import { categories } from '@/constants';
import fetchNews from '../lib/fetchNews';


async function page() {

  //fetch news data

  const news: NewResponse = await fetchNews(categories.join(','));
  
  return (
    <div>
        
    </div>
  )
}

export default page
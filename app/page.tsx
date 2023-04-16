import React from 'react'
import '../styles/globals.css'
import { categories } from '@/constants';
import fetchNews from '../lib/fetchNews';


async function page() {

  //fetch news data

  const news: NewResponse = await fetchNews(categories.join(','));
  
  return (
    <div>
        this is just to check the pull request is working or not
        
    </div>
  )
}

export default page
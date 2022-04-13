import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import TableOfContent from '../components/Blog/TableOfContent';


export default function Resources() {
  return (
    <div className="container">
      <h1 className='mt-4'>Resources</h1>
      <TableOfContent />

      <div className='mb-5'>
        <h3 className='mb-3'>Test 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className='mb-5'>
        <h3 className='mb-3'>Test 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className='mb-5'>
        <h3 className='mb-3'>Test 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
      <div className='mb-5'>
        <h3 className='mb-3'>Test 4</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    </div>
  )
}
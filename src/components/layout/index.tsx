import { ReactNode, useEffect } from 'react'
import './layout.css'

type layoutProps = {
  children: ReactNode
}

function Layout({ children }: layoutProps) {
  useEffect(() => {
    const handleScroll = () => {
      const backTopButton = document.getElementById('back-top')
      const scrollPosition = window.scrollY
      
      if (scrollPosition >= 110) {
        backTopButton?.classList.add('visible')
      } else {
        backTopButton?.classList.remove('visible')
      }
    }

    window.addEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <div className='flex flex-col items-center mt-20'>
        {children}
        <a id='back-top' href='#top'>
          <svg width="32" height="32" viewBox="0 0 24 24"
            fill="currentColor" className="text-blue-500">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-6.387 10.21a1 1 0 0 0 -1.32 .083l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-3 -3zm0 -5a1 1 0 0 0 -1.32 .083l-3 3l-.083 .094a1 1 0 0 0 .083 1.32l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-3 -3z" />
          </svg>
        </a>
      </div>
    </>
  )
}

export default Layout

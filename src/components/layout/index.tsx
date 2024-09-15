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
          ↑ Ir Arriba
        </a>
      </div>
    </>
  )
}

export default Layout

import { useEffect } from 'react'

const scrollOptions = {
  top: 0,
  left: 0,
  behavior: 'smooth'
}

const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style

const scrollToTop = () => supportsNativeSmoothScroll ? window.scrollTo(scrollOptions) : window.scrollTo(scrollOptions.left, scrollOptions.top)

export default function BackToTop() {
  // const [showButton, setShowButton] = useState(false)

  const onClick = () => {
    const focusableElement = document.querySelector('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])')
    
    scrollToTop()

    focusableElement.focus({
      preventScroll: true
    })
  }

  // const onScroll = () => {
  //   if (!showButton && window.scrollY > 300) {
  //     setShowButton(true)
  //   } else {
  //     setShowButton(false)
  //   }
  // }

  useEffect(() => {
    // window.addEventListener('scroll', onScroll, { passive: true })
    // return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <button className='backtotop' onClick={onClick}>
      <span>Back to Top</span>
      <i className='fa-light fa-arrow-up' />
    </button>
}

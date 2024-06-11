import React, { useEffect, useRef, ReactNode } from 'react'

interface Props {
  offset?: string
  children?: ReactNode
}

export default function Slide({ children, offset = '0px' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0')
            entry.target.classList.add('animate-slideCubiBezier')
          }
        })
      },
      { rootMargin: offset }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, offset])

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Section {
  id: string
  title: string
}

interface TocProps {
  sections: Section[]
}

export default function Toc({ sections }: TocProps) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0px 0px -80% 0px' }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) observer.unobserve(element)
      })
    }
  }, [sections])

  return (
    <div className="sticky top-24 hidden md:block">
      <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
      <ul className="space-y-2">
        {sections.map(({ id, title }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className={`block text-sm transition-colors ${
                activeId === id
                  ? 'text-blue-600 dark:text-blue-400 font-medium'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

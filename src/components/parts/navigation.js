import React from 'react';
import Link from 'next/link'

export default function Navigation({ id, className, children }) {
  const menu = [
    { display: 'Home', url: '/' },
    { display: 'Elements', url: '/elements' },
    { display: 'Blog', url: '/blog' },
    { display: 'Single Post', url: '/blog/[post_title]' },
  ]

  return (
    <>
      <nav id={id} className={className}>
        <ul>
          {menu.map((item) => {
            return (
              <li id={item.id}>
                <Link href={item.url}>
                  {item.display}
                </Link>
              </li>
            )
          })}
        </ul>
        {children}
      </nav>
    </>
  )
}
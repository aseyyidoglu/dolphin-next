import React from 'react';
import Link from 'next/link'

export default function Navigation({ id, className, children }) {
  const menu_items = [
    { display: 'Home', url: '/' },
    { display: 'Elements', url: '/elements' },
    { display: 'Blog', url: '/blog' },
    { display: 'Single Post', url: '/blog/[post_title]' },
  ]

  return (
    <>
      <nav id={id} className={className}>
        <ul>
          {menu_items.map((menu_item) => {
            return (
              <li id={menu_item.id}>
                <Link href={menu_item.url}> {menu_item.display} </Link>
              </li>)
          })}
        </ul>
        {children}
      </nav>
    </>
  )
}
import Link from "next/link"

export default function Footer() {
  return (
    <>
      <footer style={styles.footer}>
        <span>All rights reserved</span>
        <nav style={styles.nav}>
          <Link href="#" style={styles.a}>Terms</Link>
          <Link href="#" style={styles.a}>Privacy</Link>
        </nav>
      </footer>
    </>
  )
}

const styles = {
  footer: {
    display: 'flex',
    fontSize: 14,
    color: 'gray',
    gap: 10,
  },
  nav: {
    display: 'flex',
    fontSize: 14,
    color: 'gray',
    gap: 10,
  },
  a: {
    padding: 0,
    backgroundColor: 'inherit'
  }
}
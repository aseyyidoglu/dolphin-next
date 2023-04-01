import styles from './button.module.css';

export default function Button({ id, type, className, onClick, children }) {
  const createClassName = (className) => {
    switch(className) {
      case "primary":
        return `${styles.button} ${styles.primary}`
      case "secondary":
        return `${styles.button} ${styles.secondary}`
      case "submit":
        return `${styles.button} ${styles.submit}`
      default:
        return `${styles.button}`
    }
  }

  return (
    <>
      <button
        id={id}
        type={type}
        className={createClassName(className)}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
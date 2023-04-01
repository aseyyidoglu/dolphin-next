import { useState } from 'react'
import Button from '@/components/button/button'
import styles from './form.module.css'

export default function Form({ id, title, fields, onClick, children }) {
  const createField = (field, index, id) => {
    switch (field.type) {
      case 'button':
        return (
          <Button
            id={id}
            type="submit"
            onClick={onClick}
            className="submit">
            {field.name}
          </Button>
        )
        break;
      case 'text':
        return (
          <>
            <label for={id}>{field.name}</label>
            <input id={id} type={field.type}></input>
            <span className={styles.error}>This is an error message</span>
          </>
        )
        break;
      case 'textarea':
        return (
          <>
            <label for={id}>{field.name}</label>
            <textarea id={id} type="text"></textarea>
          </>
        )
        break;
      case 'password':
        return (
          <>
            <label for={id}>{field.name}</label>
            <input id={id} type={field.type}></input>
            <span className={styles.error}>This is an error message</span>
            <span className={styles.warning}>This is a warning message</span>
            <span className={styles.success}>This is a success message</span>
          </>
        )
        break;
      default:
        console.log("default");
    }
  }
  return (
    <>
      <form id={id}>
        <fieldset>
          <div>
            <h3 className="title">{title}</h3>
          </div>
          {fields.map((field, index) => {
            const id = String(field.name);
            return (
              <div id={{ title } + "_" + { index }}>
                {createField(field, index, id)}
              </div>)
          })}
        </fieldset>
      </form>
    </>
  )
}
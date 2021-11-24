import { useEffect, useState } from 'react'
import { setLocal } from '../common/LocalStorage/setLocal';
import { CODE } from '../constant/localStorage';

export default function useLocalStorage(key, initialValue) {
  const FULLKEY = CODE + key

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(FULLKEY)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })
  
  useEffect(() => {
    localStorage.setItem(FULLKEY, JSON.stringify(value))
   
  }, [FULLKEY, value])

  return [value, setValue]
}

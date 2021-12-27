import { useEffect, useRef, useState } from 'react'

export function CountButton({onClick, count}) {
  const mounted = useRef()
  const ref = useRef()
  useEffect(() => {
    return () => {
      console.log('CountButton unmount cleanup')
      mounted.current = false
    }
  }, [])
  useEffect(() => {
    ref.current.style.backgroundColor = 'red'
    setTimeout(() => {
      ref.current.style.backgroundColor = null
    }, 1000)
    if (!mounted.current) {
      console.log('CountButton mount')
      mounted.current = true
    } else {
      console.log('CountButton update')
    }
    return () => {
      if (mounted.current === true) {
        console.log('CountButton prev update cleanup')
      }
    }
  })
  return<div ref={ref}>
    <button onClick={onClick}>{count}</button>
  </div>
}

export default function DualCounter() {
  const mounted = useRef()
  const ref = useRef()
  useEffect(() => {
    return () => {
      console.log('DualCounter unmount cleanup')
      mounted.current = false
    }
  }, [])
  useEffect(() => {
    ref.current.style.backgroundColor = 'red'
    setTimeout(() => {
      ref.current.style.backgroundColor = null
    }, 1000)
    if (!mounted.current) {
      console.log('DualCounter mount')
      mounted.current = true
    } else {
      console.log('DualCounter update')
    }
    return () => {
      if (mounted.current === true) {
        console.log('DualCounter prev update cleanup')
      }
    }
  })
  const [count1, setCount1] = useState(0)
  const increment1 = () => setCount1(c => c + 1)

  const [count2, setCount2] = useState(0)
  const increment2 = () => setCount2(c => c + 1)

  return (
    <div ref={ref}>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </div>
  )
}

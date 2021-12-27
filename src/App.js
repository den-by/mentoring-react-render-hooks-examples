import './App.css'
import { useEffect, useRef, useState } from 'react'

const App = () => {
  return (
    <>
      App
      <DualCounter/>
      <Component0/>
      {/*<Component1/>*/}
    </>
  )
}

function Component0 () {
  const mounted = useRef()
  const ref = useRef()
  useEffect(() => {
    return () => {
      console.log('0 component unmount cleanup')
      mounted.current = false
    }
  }, [])
  useEffect(() => {
    ref.current.style.backgroundColor = 'red'
    setTimeout(() => {
      ref.current.style.backgroundColor = null
    }, 1000)
    if (!mounted.current) {
      console.log('0 component mount')
      mounted.current = true
    } else {
      console.log('0 component update')
    }
    return () => {
      if (mounted.current === true) {
        console.log('0 component prev update cleanup')
      }
    }
  })

  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)
  console.log('0 component start rendering')
  return (
    <div ref={ref}>
      <button onClick={increment}>{count}</button>
      0 Component
      <Component1/>
    </div>
  )
}

const Component1 = () => {
  const ref = useRef()
  const mounted = useRef()
  useEffect(() => {
    return () => {
      mounted.current = false
      console.log('1 component unmount cleanup')
    }
  }, [])
  useEffect(() => {
    ref.current.style.backgroundColor = 'red'
    setTimeout(() => {
      ref.current.style.backgroundColor = null
    }, 1000)
    if (!mounted.current) {
      console.log('1 component mount')
      mounted.current = true
    } else {
      console.log('1 component update')
    }
    return () => {
      if (mounted.current === true) {
        console.log('1 component prev update cleanup')
      }
    }
  })
  console.log('1 component start rendering')
  return <div ref={ref}>
    1 Component
    <Component2/>
  </div>
}

const Component2 = () => {
  const ref = useRef()
  const mounted = useRef()
  useEffect(() => {
    return () => {
      mounted.current = false
      console.log('2 component unmount cleanup')
    }
  }, [])
  useEffect(() => {
    ref.current.style.backgroundColor = 'red'
    setTimeout(() => {
      ref.current.style.backgroundColor = null
    }, 1000)
    if (!mounted.current) {
      console.log('2 component mount')
      mounted.current = true
    } else {
      console.log('2 component update')
    }
    return () => {
      if (mounted.current === true) {
        console.log('2 component prev update cleanup')
      }
    }
  })
  console.log('2 component start rendering')
  return <div  ref={ref}>
    2 Component
  </div>
}

export default App

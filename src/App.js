import './App.css'
import { useEffect, useRef, useState } from 'react'

const App = () => {
  return (
    <Component0/>
  )
}

function Component0() {
  const mounted = useRef();
  useEffect(() => {
    return () => {
      console.log('0 component unmount cleanup')
      mounted.current = false
    }
  }, [])
  useEffect(() => {
    if (!mounted.current) {
      console.log('0 component mount')
      mounted.current = true
    } else {
      console.log('0 component update')
    }
    return () => {
      if( mounted.current === true) {
        console.log('0 component prev update cleanup')
      }
    }
  }, )

  const [count, setCount] = useState(0)
  const increment = () => setCount(c => c + 1)
  console.log('0 component start rendering')
  return (
    <>
      <button onClick={increment}>{count}</button>
      <div>0 Component</div>
      {<Component1/>}
    </>
  )
}

const Component1 = () => {
  const mounted = useRef();
  useEffect(() => {
    return () => {
      mounted.current = false
      console.log('1 component unmount cleanup')
    }
  }, [])
  useEffect(() => {
    if (!mounted.current) {
      console.log('1 component mount')
      mounted.current = true
    } else {
      console.log('1 component update')
    }
    return () => {
      if( mounted.current === true) {
        console.log('1 component prev update cleanup')
      }
    }
  }, )
  console.log('1 component start rendering')
  return <>
    <div>1 Component</div>
    <Component2/>
  </>
}

const Component2 = () => {
  const mounted = useRef();
  useEffect(() => {
    return () => {
      mounted.current = false
      console.log('2 component unmount cleanup')
    }
  }, [])
  useEffect(() => {
    if (!mounted.current) {
      console.log('2 component mount')
      mounted.current = true
    } else {
      console.log('2 component update')
    }
    return () => {
      if( mounted.current === true) {
        console.log('2 component prev update cleanup')
      }
    }
  }, )
  console.log('2 component start rendering')
  return <>
    <div>2 Component</div>
  </>
}

export default App

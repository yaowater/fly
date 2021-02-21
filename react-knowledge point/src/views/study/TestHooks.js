// Hooks 实际上就是一套API，提供给函数式组件来使用的
// useState
// useEffect  componentDidMount + componentDidUpdate + componentWillUnmount
// useRef
// useContext

// 作用：让函数式组件(无状态组件)拥有状态、生命周期、上下文等特性

import React, { useState, useEffect } from 'react'

// 无状态组件（函数式组件）
export default function TestHooks(props) {
  let timer = null

  // 声明式变量
  let [count, setCount] = useState(500)
  let [list, setList] = useState([])


  // 自定义方法
  function changeCount() {
    count++
    setCount(count)
  }
  // 列表渲染
  function createList() {
    return list.map(ele=>(
      <div key={ele}>{ele}</div>
    ))
  }

  // componentDidMount()
  // 语法：useEffect(fn, [])
  useEffect(()=>{
    console.log('mounted')
    // 调接口、开启websocket长连接、定时器
    timer = setTimeout(()=>{
      setList([1,2,3,4])
    }, 3000)

    // 这个return，相当于是 componentWillUnmount
    // 在这里清除各种耗费性能的东西，比如定时器、长连接
    return ()=>{
      clearTimeout(timer)
    }
    // 如果没有什么需要清除的东西
    // return undefined
  })

  // componentDidUpdate
  useEffect(()=>{
    console.log('count发生了变化')
    return undefined
  }, [count])

  return(
    <div>
      <h1>测试Hooks</h1>
      <h3>{count}</h3>
      <button onClick={changeCount}>改变count</button>
      <hr/>
      {createList()}
    </div>
  )
}

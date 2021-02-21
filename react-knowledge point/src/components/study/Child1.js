import React from 'react'

// 函数式组件（无状态组件）
// 它没有状态state
// 它没有生命周期，不能使用render
// 它也没有this

// 它唯一好处是性能好，这是react性能优化方式之一

// props是父子之间纽带
// props是只读的，不能改
// props不能赋值给state。props和state没有关系，不能相互赋值。
export default function Child1(props) {
  return(
    <div className='child'>
      <h2>{props.aaa}</h2>
      <h2>{props.bbb}</h2>
      {/* 把父组件传递过的jsx变量渲染出来 */}
      { props.children }
    </div>
  )
}

import React from 'react'


function ChildA(props) {

  function click() {
    console.log('child A')
  }

  return(
    <div>
      <button onClick={click}>点击</button>
    </div>
  )
}

function ChildB(props) {
  return(
    <div>
      <h3>2002</h3>
    </div>
  )
}


export default class TestFrag extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ChildA></ChildA>
        <ChildB></ChildB>
      </React.Fragment>
    )
  }
}

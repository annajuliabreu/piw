import React from "react";

//V0
/*function HelloWorld() {
  return <div>
    <h1>Jefferson de Carvalho</h1>
  </div>
}*/


//V1
/*function HelloWorld() {
  return (
    <div>
      <h1>Jefferson de Carvalho V1</h1>
    </div>
  )
}*/

//V2
/*const HelloWorld = () => {
  let x = 2
  let y = 3
  let res = x + y
  return (
    <div>
      <h1>Jefferson de Carvalho V2 {res}</h1>
    </div>
  )
}*/

//V3 - função anônima
/*const HelloWorld = () =>
  <div>
    <h1>Jefferson de Carvalho V3</h1>
  </div>
*/

//V4 - componente de classe
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default HelloWorld 
// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = (
  <div
    className="box box--small"
    style={{background: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{background: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{background: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

// function Box({color, className, children}) {
//   return (
//     <div
//       className={`box ${className}`}
//       style={{background: `${color}`, fontStyle: 'italic'}}
//     >
//       {children}
//     </div>
//   )
// }

//without children
// function Box({className = '', ...otherProps}) {
//   return <div className={`box ${className}`.trim()} {...otherProps} />
// }

//Extra Credit 2
function Box({size, className = '', ...otherProps}) {
  const sizeClassName = size ? `box--${size}` : ''
  return <div size={size} className={`box ${sizeClassName}`} {...otherProps} />
}

function App() {
  return (
    <>
      {/* <Box color="lightblue" className="box--small"> */}
      {/* <Box
        style={{background: 'lightblue', fontStyle: 'italic'}}
        className="box--small"
      >
        small lightblue box
      </Box> */}
      <Box
        size="small"
        style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
      >
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>
        medium pink box
      </Box>{' '}
      {largeBox}
    </>
  )
}

export default App

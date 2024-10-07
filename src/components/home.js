import React from 'react'
import PropTypes from 'prop-types'

export default function Home(props) {
  return (
    <div style={{color:'black', fontSize:200}}>
      <center>{props.heading}</center>
    </div>
  )
}

Home.propTypes={
    heading:PropTypes.string
}

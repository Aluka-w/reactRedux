import React, { Component } from "react";
import PropTypes from 'prop-types'
class Counter extends Component {
  componentDidUpdate () {
    console.log('我检测到的变化', this.props)
  }
  render() {
    const { value, addClick, reduceClick } = this.props
    const styleObj = {
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft:10,
      marginRight:10,
      border: '1px solid #ccc',
    }
    return (
      <div>
        <button onClick={reduceClick}>减少</button>
        <span style={styleObj}>{value}</span>
        <button onClick={addClick}>增加</button>
      </div>
    )
  }
}
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  addClick: PropTypes.func,
  reduceClick: PropTypes.func
}
export default Counter
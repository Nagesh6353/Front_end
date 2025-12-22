import React, { Component } from 'react'
import ClassState from './ClassState'
import FuncState from './FuncState'
import ObjectState from './ObjectState'

export default class MainState extends Component {
  render() {
    return (
      <div>
         <h1>hello this is State component</h1>
         <ClassState />
         <hr />
         <FuncState />
         <hr />
         <ObjectState />
      </div>
    )
  }
}

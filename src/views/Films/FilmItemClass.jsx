import React, { Component } from 'react'

export default class FilmItemClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  handleChangePage = (page) => {
    console.log(page)
  }
  render() {
    return (
      <li onClick={() => this.handleChangePage(this.props.filmId)}>{this.props.name}</li>
    )
  }
}

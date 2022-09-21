import React, { Component } from 'react'
import WithRouter from '../../components/WithRouter'

class FilmItemClass extends Component {
  constructor(props) {
    super(props)
    // console.log(this.props);
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
export default WithRouter(FilmItemClass)
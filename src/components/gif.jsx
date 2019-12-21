import React, { Component } from 'react';

class Gif extends Component {
  render () {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e4711551256550435406ce443c68bc36bb52a31f090&rid=giphy.gif`;
    return(
      <img src={src} alt="" className="gif"/>
    );
  }
}

export default Gif;

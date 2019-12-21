/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif){
      this.props.selectGif(this.props.id);
      }
    }

  render () {
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e4711551256550435406ce443c68bc36bb52a31f090&rid=giphy.gif`;
    return(
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;

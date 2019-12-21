import React, { Component } from 'react';

import Gif from './gif.jsx';


class GifList extends Component {

  renderList = () => {
    return this.props.gifs.map(gif => <Gif id={gif.id} key={gif.id} />);

    }

  render () {
    return (
      <div className="renderList">
        {this.renderList()}
      </div>
    )
  }
}

export default GifList;

/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

const GiphyApi = 'iRZMOL6Ti5LPSHON2f4HUae1lhTJuaSo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "LrWZdS5NzQbJyTQMNg"
    };
  }

  search = (query) => {
    giphy({ apiKey: GiphyApi, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (error, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;

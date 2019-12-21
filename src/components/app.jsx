import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "dyYTR8Mq0VMByku0Sb"
    }
  }

  search = (query) => {
      giphy('iRZMOL6Ti5LPSHON2f4HUae1lhTJuaSo').search({
        q: query,
        rating: 'g'
      },  (error, result) => {
        this.setState({
          gifs: result.data
      });
    });
  }


  render () {
    return(
      <div>
        <div className="left-scene">
            <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene"></div>
          <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;

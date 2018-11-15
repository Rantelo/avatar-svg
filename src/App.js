import React, { Component, Fragment } from 'react';
import Man, { hair_style, hair_colors, skin_colors } from './hair_styles/Man';
import './App.css';

const HairSelector = ({action}) => {
  return Object
    .keys(hair_style())
    .map((e) => (
      <button
        key={`hair-${e}`}
        onClick={() => action(e)}>
        {e}
      </button>
    ));
}

const ColorSelector = ({action, colors}) => {
  return Object
    .keys(colors)
    .map((e) => (
      <div
        key={`hair-${e}`}
        onClick={() => action(e)}
        className={e}
        style={{padding: "10px", margin: "5px"}}
      />
    ));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hair: "mexican",
      hairColor: "DarkBrown",
      skinColor: "Caramel",
    }
  }

  render() {
    const {
      hair,
      hairColor,
      skinColor,
    } = this.state;

    return (
      <Fragment>
        <div className="wrapper">
          <h1>Avatar Editor
            <span role="img" aria-label="fire">🔥</span>
            <span role="img" aria-label="fire">🔥</span>
            <span role="img" aria-label="fire">🔥</span>
          </h1>
          <div style={{width: 400, height: "auto"}}>
            <Man
              hair={hair}
              hairColor={hairColor}
              skinColor={skinColor}
            />
            <span>Skin Color</span>
            <ColorSelector
              colors={skin_colors}
              action={(e) => this.setState({skinColor: e})}
            />
            <span>Hair Color</span>
            <ColorSelector
              colors={hair_colors}
              action={(e) => this.setState({hairColor: e})}
            />
            <span>Hair</span>
            <HairSelector
              action={(e) => this.setState({hair: e})}
            />
          </div>
        </div>
        <footer>
          Avatar Editor © 2018 by @rantelo, @iburgos72 and @gerry
        </footer>
      </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import Man, {hair_style} from './hair_styles/Man';
import './App.css';

const HairSelector = ({action}) => {
  return Object
    .keys(hair_style)
    .map((e) => (
      <button
        key={`hair-${e}`}
        onClick={() => action(e)}>
        {e}
      </button>
    ));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hair: "mexican" }
  }

  render() {
    const { hair } = this.state;
    return (
      <Fragment>
        <div className="wrapper">
          <h1>Avatar Editor
            <span role="img" aria-label="fire">🔥</span>
            <span role="img" aria-label="fire">🔥</span>
            <span role="img" aria-label="fire">🔥</span>
          </h1>
          <div style={{width: 400, height: "auto"}}>
            <Man hair={hair} />
            <HairSelector action={(e) => this.setState({hair: e})}/>
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

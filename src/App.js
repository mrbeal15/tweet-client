import axios from 'axios';
import React, { Component } from 'react';
import Tweet from './components/tweet';
import Button from './components/button';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loading: false,
      data: null
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });

    axios({
      method: 'get',
      url: 'http://localhost:3001/tweets',
      responseType: 'json'
    })
    .then(data => {
      this.setState({ data: data, loading: false })
    })
  }

  handleChange(event) {
    this.setState({ loading: true })

    const queryTopic = event.target.value;

    axios({
      method: 'get',
      url: `http://localhost:3001/tweets/topics?topic=${queryTopic}`,
      responseType: 'json'
    }).then(data => {
      this.setState({ data: data, loading: false, value: queryTopic })
    })
  }

  render() {
    if (this.state.loading) {
      return <p>Loading tweets...</p>
    }

    return (
      <div className="App">
        <label>Select a Topic:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="nasa">Nasa</option>
            <option value="health care">Health Care</option>
            <option value="open source">Open Source</option>
          </select>
        </label>
        <Tweet { ...this.state.data } />
      </div>
    );
  }
}

export default App;

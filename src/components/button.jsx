import React from 'react';

export default class Button extends React.Component {
  onClick(event) {
    const value = event.target.value;
  }

  render() {
    return (
      <button value={this.props.value} onClick={e => this.onClick(e)}>
        {this.props.value}
      </button>
    );
  }
}

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class ReRenderer extends Component {
  constructor () {
    super()

    this.state = {
      reRenderCount: 0,
    }

    const reRenderInterval = setInterval(() => {
      this.setState({
        reRenderCount: this.state.reRenderCount + 1
      })

      if (this.state.reRenderCount === 99) {
        clearInterval(reRenderInterval)
      }
    }, 50)
  }

  componentDidUpdate() {
    global.performance.mark('AFTER_RENDER')
  }

  componentWillUpdate() {
    global.performance.mark('BEFORE_RENDER')
  }

  render () {
    return <App counter={this.state.reRenderCount} />
  }
}

const getDiffs = () => {
  return global.performance.getEntries()
    .filter(({ entryType }) => entryType === 'mark')
    .reduce((diffs, entry) => {
      if (entry.name === 'BEFORE_RENDER') {
        return [...diffs, [entry]]
      } else {
        return [
          ...diffs.slice(0, -1),
          [diffs[diffs.length - 1][0], entry]
        ]
      }
    }, [])
    .map(([before, after]) => [
      after.startTime - before.startTime,
      before,
      after
    ])
}

global.getDiffs = getDiffs

ReactDOM.render(
  <ReRenderer />,
  document.getElementById('root')
);

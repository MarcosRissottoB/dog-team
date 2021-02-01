import React, { Component} from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    const { children } = this.props;
    return (
      <>
        { this.state.hasError ?
          <h2>An error has ocurred</h2>
          : {children}
        }
      </>
    )
  }
}

export default ErrorBoundary;

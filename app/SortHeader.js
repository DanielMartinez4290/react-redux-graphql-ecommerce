import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import Form from 'react-bootstrap/Form';

class SortHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'all'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

    if (event.target.value == 'low') {
      this.props.sortLow();
    } else if (event.target.value == 'high') {
      this.props.sortHigh();
    } else {
      this.props.allCategory();
    }
  }

  render() {
    return (
      <div className="sortHeader">
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Sort By:</Form.Label>
            <Form.Control as="select" value={this.state.value} onChange={this.handleChange}> 
              <option value="all" disabled>None</option>
              <option value="low">Price: Low - High</option>
              <option value="high">Price: High - Low</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <SortHeader {...props} />
    </ErrorBoundary>
  );
}

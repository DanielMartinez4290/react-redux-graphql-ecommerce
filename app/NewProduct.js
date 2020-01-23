import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewProduct extends Component {
    
  state = {
    name: '',
    slug: '',
  };

  handleChange = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { name, slug } = this.state;

    event.preventDefault();

    onSubmit({
      url: slug,
      slug,
      id: Date.now().toString(),
      name,
      price: 1899.00,
      category: "Gibson"
    });

    this.setState({ name: '', slug: '' });
  };

  render() {
    const { name, slug } = this.state;

    return (
      <form className="NewProduct" onSubmit={this.handleSubmit}>
        <input
          className="NewProduct-input"
          name="name"
          placeholder="Name"
          type="text"
          value={name}
          onChange={this.handleChange}
        />
        <input
          className="NewProduct-input"
          name="slug"
          placeholder="Slug"
          type="text"
          value={slug}
          onChange={this.handleChange}
        />
        <input className="NewProduct-submit button" type="submit" />
      </form>
    );
  }
}

NewProduct.propTypes = {
  onSubmit: PropTypes.func,
};

NewProduct.defaultProps = {
  onSubmit: () => {},
};

export default NewProduct;
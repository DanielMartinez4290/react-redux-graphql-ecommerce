import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewProduct extends Component {
    
  state = {
    name: '',
    slug: '',
    url: '',
    price: '',
    category: ''
  };

  handleChange = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { name, slug, price, category, url } = this.state;

    event.preventDefault();

    onSubmit({
      url,
      slug,
      id: Date.now().toString(),
      name,
      price,
      category
    });

    this.setState({ name: '', slug: '' , price: 0, category: '', url: ''});
  };

  render() {
    const { name, slug, price, category, url } = this.state;

    return (
      <form className="newProduct" onSubmit={this.handleSubmit}>
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
        <br></br>
        <input
          className="NewProduct-input"
          name="price"
          placeholder="Price"
          type="float"
          value={price}
          onChange={this.handleChange}
        />
        <input
          className="NewProduct-input"
          name="category"
          placeholder="Category"
          type="text"
          value={category}
          onChange={this.handleChange}
        />
        <br></br>
        <input
          className="NewProduct-input"
          name="url"
          placeholder="Image URL"
          type="text"
          value={url}
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
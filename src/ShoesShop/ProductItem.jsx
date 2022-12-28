import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item, getInfoShoes } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={item.image} alt="" />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.price}$</p>
          <button
            className="btn btn-dark"
            onClick={() => {
              getInfoShoes(item);
            }}
            data-toggle="modal"
            data-target="#myModal"
          >
            Add to cart <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

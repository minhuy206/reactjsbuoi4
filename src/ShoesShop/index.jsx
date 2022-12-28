import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

export default class ShoesShop extends Component {
  state = {
    shoes: "",
  };
  getInfoShoes = (shoes) => {
    this.state.shoes = shoes;
    this.setState({
      shoes: this.state.shoes,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center">Shoes Shop</h1>
        <ProductList getInfoShoes={this.getInfoShoes} />
        <Modal shoes={this.state.shoes} />
      </>
    );
  }
}

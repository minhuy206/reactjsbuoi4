import React, { Component } from "react";
import ProductItem from "./ProductItem";
import Data from "./data.json";

export default class ProductList extends Component {
  render() {
    const data = Data;
    const { getInfoShoes } = this.props;
    return (
      <div className="container">
        <div className="row">
          {data.map((shoes) => {
            return (
              <div className="col-4 my-2">
                <ProductItem
                  key={shoes.id}
                  item={shoes}
                  getInfoShoes={getInfoShoes}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

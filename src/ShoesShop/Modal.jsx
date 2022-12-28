import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { shoes } = this.props;
    return (
      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Add to cart</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <div className="card">
                <img className="card-img-top" src={shoes.image} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{shoes.name}</h4>
                  <p className="card-text">
                    {shoes.price}$ (Stocking: {shoes.quantity})
                  </p>
                  <p className="card-text">{shoes.description}</p>
                </div>
              </div>
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

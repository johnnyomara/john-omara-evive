import React, { Component } from "react";

export class Lunch extends Component {
  constructor() {
    super();
    this.state = { order: [] };
    this.itemAdder = this.itemAdder.bind(this);
  }

  itemAdder(e) {
    this.setState((prevState) => ({
      order: [...prevState.order, parseInt(e.target.value)],
    }));
  }

  render() {
    return (
      <>
        <h1>Lunch</h1>
        <div>
          <div>
            <h3>Sandwich</h3>
            <button
              value={1}
              onClick={(e) => {
                this.itemAdder(e);
              }}
            >
              Add
            </button>
          </div>

          <div>
            <h3>Chips</h3>
            <button
              value={2}
              onClick={(e) => {
                this.itemAdder(e);
              }}
            >
              Add
            </button>
          </div>

          <div>
            <h3>Soda</h3>
            <button
              value={3}
              onClick={(e) => {
                this.itemAdder(e);
              }}
            >
              Add
            </button>
          </div>
        </div>

        <div>
          <h3>Current Order</h3>
          <p>{this.state.order.join(", ")}</p>
          <button
            onClick={() => this.props.submitOrder("lunch", this.state.order)}
          >
            Place Order
          </button>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";

export class Dinner extends Component {
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
        <h1>Dinner</h1>
        <div>
          <div>
            <h3>Steak</h3>
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
            <h3>Potatoes</h3>
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
            <h3>Wine</h3>
            <button
              value={3}
              onClick={(e) => {
                this.itemAdder(e);
              }}
            >
              Add
            </button>
          </div>

          <div>
            <h3>Cake</h3>
            <button
              value={4}
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
            onClick={() => this.props.submitOrder("dinner", this.state.order)}
          >
            Place Order
          </button>
        </div>
      </>
    );
  }
}

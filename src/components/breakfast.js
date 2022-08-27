import React, { Component } from "react";

export class Breakfast extends Component {
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
        <h1>Breakfast</h1>
        <div>
          <div>
            <h3>Eggs</h3>
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
            <h3>Toast</h3>
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
            <h3>Coffee</h3>
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
            onClick={() => this.props.submitOrder("breakfast", this.state.order)}
          >
            Place Order
          </button>
        </div>
      </>
    );
  }
}



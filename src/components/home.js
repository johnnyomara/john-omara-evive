import React, { Component } from "react";
import { Breakfast } from "./breakfast";
import { Lunch } from "./lunch";
import { Dinner } from "./dinner";
import { breakfast, dinner, lunch } from "../utils/utils";

export class Home extends Component {
  constructor() {
    super();
    this.state = { meal: undefined };
    this.mealSelector = this.mealSelector.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  mealSelector(e) {
    this.setState({ meal: e.target.value });
  }

  // In production I would have definitely displayed this information
  // differently. I'd also use more elegant error handling since we'd
  // likely be making calls to the database as well.
  submitOrder(meal, items) {
    const order = { meal: meal };
    items.forEach((element) => {
      order[element] = (order[element] || 0) + 1;
    });
    if (order[1] === undefined) {
      alert("Unable to process: Main is missing");
      return;
    }
    if (order[2] === undefined) {
      alert("Unable to process: Side is missing");
      return;
    }
    if (order.meal === "dinner") {
      alert(dinner(order));
    } else if (order.meal === "lunch") {
      alert(lunch(order));
    } else if (order.meal === "breakfast") {
      alert(breakfast(order));
    }
  }

  render() {
    const meals = { breakfast: Breakfast, lunch: Lunch, dinner: Dinner };
    // I went back and forth deciding whether to make each meal its own component
    // or to render them dynamically based on menu input. I ultimately decided
    // to make individual components, but I think in production I would make
    // a reusable meal component to handle everything.
    const Meal = meals[this.state.meal];
    return this.state.meal ? (
      <Meal submitOrder={this.submitOrder} />
    ) : (
      <>
        <div>Select Meal</div>
        <button value={"breakfast"} onClick={(e) => this.mealSelector(e)}>
          Breakfast
        </button>
        <button value={"lunch"} onClick={(e) => this.mealSelector(e)}>
          Lunch
        </button>
        <button value={"dinner"} onClick={(e) => this.mealSelector(e)}>
          Dinner
        </button>
      </>
    );
  }
}

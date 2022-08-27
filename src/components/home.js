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

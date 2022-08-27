export const breakfast = (order) => {
  const menu = { 1: "eggs", 2: "toast", 3: "coffee" };
  for (let i = 1; i < 4; i++) {
    if (order[i] > 1) {
      return `Unable to process: ${menu[i]} cannot be ordered more than once`;
    }
  }
  return `eggs, toast, ${
    order[3] === undefined
      ? " water"
      : order[3] > 1
      ? `coffee(${order[3]})`
      : "coffee"
  }`;
};

export const lunch = (order) => {
  const menu = { 1: "sandwich", 2: "chips", 3: "soda" };
  for (let i = 1; i < 4; i++) {
    if (order[i] > 1 && i !== 2) {
      return `Unable to process: ${menu[i]} cannot be ordered more than once`;
    }
  }
  return `eggs, ${order[2] > 1 ? `chips(${order[2]})` : "chips"}, ${
    order[3] === undefined ? " water" : "soda"
  }`;
};

export const dinner = (order) => {
  const menu = { 1: "steak", 2: "potatoes", 3: "wine", 4: "cake" };
  for (let i = 1; i < 5; i++) {
    if (order[i] > 1) {
      return `Unable to process: ${menu[i]} cannot be ordered more than once`;
    }
  }
  if (order[4] < 1) {
    return "Unable to process: cake must be ordered";
  } else {
    return `steak, potatoes, cake, ${
      order[3] === undefined ? " water" : "wine, water"
    }`;
  }
};

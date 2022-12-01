import { getRations } from "./rations";

const getMostCaloriesCarriedByTop3Elves = () => {
  const rations = getRations();
  const totalCalsPerElves = rations.map((x) => ({
    ...x,
    totalCalories: x.reduce((acc, curr) => {
      return curr + acc;
    }, 0),
  }));

  const mostCaloriesCarriedByTop3Elves = () =>
    totalCalsPerElves.reduce(
      (acc, curr) => {
        if (curr.totalCalories > acc[2])
          return [acc[0], acc[1], curr.totalCalories];
        return acc.sort((b, a) => a - b);
      },
      [0, 0, 0]
    );

  const total = mostCaloriesCarriedByTop3Elves().reduce(
    (acc, curr) => curr + acc
  );

  console.log({ answer: total });

  return total;
};

getMostCaloriesCarriedByTop3Elves();

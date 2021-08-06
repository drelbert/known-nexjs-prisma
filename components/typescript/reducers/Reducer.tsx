import React, { Dispatch } from "react";
import { useReducer } from "react";

// the useReducer hook shines where
// given three different properties, determine the third one

type MealData = {
  numberOfPeople: number;
  mealsPerPerson: number;
  mealsPerBox: number;
};

// combining the type: MealData with another type: mealsNeeded
// combining two objects
type MealState = MealData & { boxesNeeded: number };

const calculateMealsNeeded = function calculate({
  numberOfPeople,
  mealsPerPerson,
  mealsPerBox,
}: MealData): number {
  return Math.ceil((numberOfPeople * mealsPerPerson) / mealsPerBox);
};

// helper function to use in reducer to update the object
const addMealsNeededToMealData = function (data: MealData): MealState {
  return { ...data, boxesNeeded: calculateMealsNeeded(data) };
};

const initialState: MealState = {
  numberOfPeople: 5,
  mealsPerPerson: 3,
  mealsPerBox: 10,
  boxesNeeded: 2,
};

type MealAction = {
  type:
    | "UPDATE_NUMBER_OF_PEOPLE"
    | "UPDATE_MEALS_PER_PERSON"
    | "UPDATE_MEALS_PER_BOX";
  payload: number;
};

// note this reduce is only a JavaScript function
const reducer = function reduce(state: MealState, action: MealAction) {
  if (action.type === "UPDATE_NUMBER_OF_PEOPLE") {
    return addMealsNeededToMealData({
      ...state,
      numberOfPeople: action.payload,
    });
  }
  if (action.type === "UPDATE_MEALS_PER_PERSON") {
    return addMealsNeededToMealData({
      ...state,
      mealsPerPerson: action.payload,
    });
  }
  if (action.type === "UPDATE_MEALS_PER_BOX") {
    return addMealsNeededToMealData({
      ...state,
      mealsPerBox: action.payload,
    });
  }
  console.log({ action });
  return state;
};

const Calculation = function calculation({ count }: { count: any }) {
  return (
    <section className="calculation">
      <p className="count">{count}</p>
      <p className="count">Boxes Needed</p>
    </section>
  );
};

const Calculator = ({
  dispatch,
  state,
}: {
  state: MealState;
  dispatch: Dispatch<MealAction>;
}) => {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor="number-of-people">Number of People</label>
      <input
        id="number-of-people"
        type="number"
        value={state.numberOfPeople}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_NUMBER_OF_PEOPLE",
            payload: +event.target.value,
          })
        }
      />
      <label htmlFor="meals-per-person">Meals Per Person</label>
      <input
        id="meals-per-person"
        type="number"
        value={state.mealsPerPerson}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_MEALS_PER_PERSON",
            payload: +event.target.value,
          })
        }
      />
      <label htmlFor="meals-per-box">Meals Per Box</label>
      <input
        id="meals-per-box"
        type="number"
        value={state.mealsPerBox}
        onChange={(event) =>
          dispatch({
            type: "UPDATE_MEALS_PER_BOX",
            payload: +event.target.value,
          })
        }
      />
    </form>
  );
};

const Reducer = function reducers() {
  // putting the reduce to use
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="calculator">
      <header>
        <h1>Meal Calculator</h1>
      </header>
      <Calculation count={state.boxesNeeded} />
      <Calculator state={state} dispatch={dispatch} />
    </main>
  );
};

export default Reducer;

import { useState } from "react";
function NutritionMeter() {
  const defaultItemsDisplayed = [
    {
      id: 1,
      name: "Apple",
      calories: 52,
      protein: 0.26,
      carbs: 14,
      fat: 1,
      quantity: 1,
    },
    {
      id: 2,
      name: "Banana",
      calories: 89,
      protein: 1.09,
      carbs: 23,
      fat: 5,
      quantity: 1,
    },
    {
      id: 3,
      name: "Grapes",
      calories: 40,
      protein: 0.2,
      carbs: 20,
      fat: 2,
      quantity: 1,
    },
    {
      id: 4,
      name: "Orange",
      calories: 35,
      protein: 0.15,
      carbs: 25,
      fat: 4,
      quantity: 1,
    },
  ];

  const [nutritionInfo, setNurtritionInfo] = useState(defaultItemsDisplayed);
  const [addedItem, setAddedItem] = useState({
    name: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
    quantity: "",
  });

  console.log(nutritionInfo);

  return (
    <>
      <section>
        <form action="" className="form-field">
          <input
            type="text"
            id="name"
            placeholder="Item Name"
            onChange={(e) => {
              setAddedItem((prevObj) => ({ ...prevObj, name: e.target.value }));
            }}
          />
          <input
            type="number"
            id="calories"
            placeholder="Calories"
            onChange={(e) => {
              setAddedItem((prevObj) => ({
                ...prevObj,
                calories: e.target.value,
              }));
            }}
          />
          <input
            type="number"
            id="protein"
            placeholder="Protein (g)"
            onChange={(e) => {
              setAddedItem((prevObj) => ({
                ...prevObj,
                protein: e.target.value,
              }));
            }}
          />
          <input
            type="number"
            id="carbs"
            placeholder="Carbs (g)"
            onChange={(e) => {
              setAddedItem((prevObj) => ({
                ...prevObj,
                carbs: e.target.value,
              }));
            }}
          />
          <input
            type="number"
            id="fat"
            placeholder="Fat (g)"
            onChange={(e) => {
              setAddedItem((prevObj) => ({ ...prevObj, fat: e.target.value }));
            }}
          />
        </form>
      </section>
      <section className="btn-container">
        <button
          className="add-items"
          onClick={() => {
            setNurtritionInfo([
              ...nutritionInfo,
              { ...addedItem, quantity: 1 },
            ]);
          }}
        >
          Add Items
        </button>
        <button
          className="clear-all"
          onClick={() => {
            setNurtritionInfo([]);
            console.log(nutritionInfo);
          }}
        >
          Clear All
        </button>
      </section>
      <section className="displayed-items">
        {nutritionInfo.map((item, i) => {
          return (
            <div key={i}>
              <h2>{item.name}</h2>
              <h4>Calories: {item.calories}</h4>
              <h4>Protein: {item.protein}</h4>
              <h4>Carbs: {item.carbs}</h4>
              <h4>Fat: {item.fat}</h4>
              <div className="quantity">
                <button className="increase">+</button>
                <h6>{item.quantity}</h6>
                <button className="decrease">-</button>
              </div>
              <div className="bottom">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default NutritionMeter;

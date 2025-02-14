function NutritionMeter() {
  return (
    <>
      <section>
        <form action="" className="form-field">
          <input type="text" id="name" placeholder="Item Name" />
          <input type="number" id="calories" placeholder="Calories" />
          <input type="number" id="protein" placeholder="Protein (g)" />
          <input type="number" id="carbs" placeholder="Carbs (g)" />
          <input type="number" id="fat" placeholder="Fat (g)" />
        </form>
      </section>
      <section className="btn-container">
        <button className="add-items">Add Items</button>
        <button className="clear-all">Clear All</button>
      </section>
    </>
  );
}

export default NutritionMeter;


export const foods = [
  { id: 1, dish: "", cal: 250, serving: "250 grams per serving" },
  { id: 2, dish: "Tinola", cal: 180, serving: "300 grams per serving" },
  { id: 3, dish: "fried chicken", cal: 280, serving: "180 grams per serving" },
  { id: 4, dish: "Inasal", cal: 160, serving: "200 grams per serving" }
];

  // default list (original)
  const defaultlist = printing(foods);

  // [...]sorts a copy, leaves original intact. sort by name
  const byName = [...foods].sort((a, b) => a.dish.localeCompare(b.dish));
  const nameSorted = printing(byName);

  // sort by calories 
  const byCalFood = [...foods].sort((a, b) => a.cal - b.cal);
  const byCal = printing(byCalFood);
  


function FoodList() {
  return (
    <>
      <h2 className="Unsort">Unsorted</h2>
      <ol>{defaultlist}</ol>

      <h2 className="NameSort">Sorted by name</h2>
      <ol>{nameSorted}</ol>

      <h2 className="CalSort">Sorted by Cal</h2>
      <ol>{byCal}</ol>
    </>
  );
}

  //for printing
  function printing(list) {
    return list.map(food => (
      <li key={food.id}>
        {food.dish ? food.dish : "Food"}: &nbsp; {food.serving ? food.serving : "serving"} &nbsp; {food.cal ? food.cal : "cal"}
      </li>
    ));
  }

export default FoodList;

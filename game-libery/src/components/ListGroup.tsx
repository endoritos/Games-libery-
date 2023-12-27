import { Fragment, useState } from "react";

Interface props {

}
function ListGroup() {
  let items = ["New york", "san fansico", "paris", "London", "Tokyo"];
const [SelectedIndex, setSelectedIndex] = useState (-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found gg</p>}
      <ul className="list-group">
        {items.map((item , index) => (
          <li
            className={SelectedIndex === index ? 'list-group-item active' : 'list-group-item' } 
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
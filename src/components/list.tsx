import React, { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./listItem";

const List = React.memo(() => {
  const [phone_numbers_list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/phone_numbers/")
      .then((res) => setList(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="phones-list">
      <div className="phones-list-item">
        <div className="phones-list-item-id">id</div>
        <div className="phones-list-item-name">Name</div>
        <div className="phones-list-item-number">Phone number</div>
      </div>
      {phone_numbers_list.map(({ id, name, number }) => (
        <ListItem key={id} item={{ id, name, number }} />
      ))}
    </div>
  );
});

List.displayName = "List";
export default List;

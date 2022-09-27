import axios from "axios";
import React from "react";

interface ListItemProps {
  id: string;
  name: string;
  number: number;
}

const ListItem = React.memo(({ item }: { item: ListItemProps }) => {
  const { id, name, number } = item;

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/phone_number/${id}`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="phones-list-item">
      <div className="phones-list-item-id">{id}</div>
      <div className="phones-list-item-name">{name}</div>
      <div className="phones-list-item-number">
        {number}
        <button className="phones-list-item-delete" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
});

ListItem.displayName = "ListItem";
export default ListItem;

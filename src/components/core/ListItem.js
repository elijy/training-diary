import "./ListItem.css";

function ListItem({ children, onClick, onDelete }) {
  return (
    <div className="list-item is-flex is-align-items-center is-justify-content-space-between">
      <div className="p-2 is-flex-grow-1" onClick={onClick}>
        {children}
      </div>
      <button
        data-testid="delete"
        onClick={onDelete}
        className="delete is-small mr-2"
      ></button>
    </div>
  );
}

export default ListItem;

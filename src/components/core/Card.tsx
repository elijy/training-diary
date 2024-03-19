import { ReactNode } from "react";
import "./Card.css";

interface Props {
  onClick?: () => void;
  onDelete?: () => void;
  header?: String;
  content: ReactNode;
}

function Card({ onDelete, onClick, header, content }: Props): JSX.Element {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="card" onClick={onClick}>
      {header && (
        <div className="card-header">
          <div className="card-header-title is-justify-content-space-between">
            {header}
            <button
              data-testid="delete"
              onClick={handleDelete}
              className="delete is-small"
            ></button>
          </div>
        </div>
      )}
      <div className="card-content">{content}</div>
    </div>
  );
}

export default Card;

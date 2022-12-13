import Card from "./Card";
import { ReactNode } from "react";

function Tile({ children }: { children: ReactNode }) {
  return (
    <Card>
      <Card.Body className="p-3 h-36">{children}</Card.Body>
    </Card>
  );
}

function Title({ children }: { children: ReactNode }) {
  return <h3 className="font-bold text-base">{children}</h3>;
}

function TopRow({ children }: { children: ReactNode }) {
  return <div className="flex justify-between">{children}</div>;
}

Tile.Title = Title;
Tile.TopRow = TopRow;

export default Tile;

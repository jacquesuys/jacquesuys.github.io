import BellIcon from "../icons/BellIcon";
import Button from "./Button";
import Card from "./Card";

function Tile() {
  return (
    <Card>
      <Card.Body className="p-3">
        <div className="flex justify-between">
          <Button className="bg-blue-600 rounded-xl px-3">
            <BellIcon />
          </Button>
          <div>logos</div>
        </div>
        <div>
          <span className="font-regular text-xs">3 New</span>
          <h3 className="font-bold text-base">Requests</h3>
        </div>

        <div className="flex items-center">
          <progress
            className="progress w-3/4 mr-2"
            value="25"
            max="100"
          ></progress>
          <span className="badge bg-blue-600 text-white">1/4</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Tile;

import LockIcon from "../icons/LockIcon";
import { InputType, LayoutType } from "../types";
import Button from "./Button";
import Card from "./Card";

function Form() {
  return <div>Form</div>;
}

function Heading({ children }: LayoutType) {
  return <h2 className="font-bold text-xl mb-3">{children}</h2>;
}

function Label({ children }: LayoutType) {
  return <h3 className="font-bold text-lg mb-3">{children}</h3>;
}

function Section({ children }: LayoutType) {
  return <section className="py-5">{children}</section>;
}

function LockInput({ children }: LayoutType) {
  return (
    <Card className="w-1/2 mb-4">
      <Card.Body className="py-2 px-4">
        <div className="flex items-center justify-between">
          <span className="font-regular text-sm">{children}</span>
          <Button className="btn-sm bg-primary px-2 rounded-xl -mr-1">
            <LockIcon className="w-4" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

function Input({ placeholder, type = "text" }: InputType) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input w-1/2 text-sm rounded-2xl mb-4"
    />
  );
}

function FileInput({ type = "file" }: InputType) {
  return (
    <input
      type={type}
      className="file-input input-ghost text-sm rounded-2xl mb-4"
    />
  );
}

Form.FileInput = FileInput;
Form.Section = Section;
Form.Input = Input;
Form.Heading = Heading;
Form.Label = Label;
Form.LockInput = LockInput;

export default Form;

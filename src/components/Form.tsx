import { LockClosedIcon as LockIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";
import { InputType, LayoutType } from "../types";
import Button from "./Button";
import Card from "./Card";

function Form({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: () => void;
}) {
  return <form onSubmit={onSubmit}>{children}</form>;
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
          <Button className="btn-sm btn-primary btn px-2 rounded-xl -mr-1">
            <LockIcon className="w-4" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

function Submit({ title }: { title: string }) {
  return (
    <input
      type="submit"
      className="w-full py-2 px-4 h-12 text-sm mb-4 rounded-full text-white bg-primary font-semibold"
      value={title}
    />
  );
}

function Error({ children }: LayoutType) {
  return <div className="text-error text-sm font-light mb-4">{children}</div>;
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
Form.Submit = Submit;
Form.Erorr = Error;

export default Form;

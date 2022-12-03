type GreetingType = { name?: string };

function Greeting({ name = "Tuna Brock" }: GreetingType) {
  return (
    <div className="font-bold text-4xl">
      Hello
      <br />
      {name}
    </div>
  );
}

export default Greeting;

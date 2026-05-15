import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Button
        label="Click"
        onClick={() => console.log("Button Clicked")}
        isDisable={false}
      />
    </div>
  );
};

export default App;

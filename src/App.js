const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Flappy",
      animal: "Bird",
      breed: "Parakeet",
    }),
    React.createElement(Pet, {
      name: "Waffle",
      animal: "Dog",
      breed: "Mutt",
    }),
    React.createElement(Pet, {
      name: "Snowball",
      animal: "Bird",
      breed: "Parakeet",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));

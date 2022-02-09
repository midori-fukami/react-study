import Backdrop from "./components/Backdrop";
import Todo from "./components/Todo";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <h1> My Todos </h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Learn Flutter" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;

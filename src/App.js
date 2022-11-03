import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
    <Navbar />
    <div className="container d-flex justify-content-center" >
      <br /><br /><br />
      <h2>Enter New Tasks!</h2>
      <br /><br /><br />
    </div>
    <TodoList/>
    </>
  );
}

export default App;

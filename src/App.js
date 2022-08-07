/* eslint-disable import/no-named-as-default */
import './App.css';
import ContactList from './ContactList';

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <hr />
      <button type="button" className="btn btn-primary add-contact">
        Add Contact
      </button>
      <br />
      <ContactList />
    </div>
  );
}

export default App;

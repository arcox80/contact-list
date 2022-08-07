import hughie from './images/hughie.jpg';
import butcher from './images/butcher.jpg';
import mm from './images/mm.jpg';
import frenchie from './images/frenchie.jpg';
import kimiko from './images/kimiko.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Contact List</h1>
      <hr />
      <button type="button" className="btn btn-primary add-contact">
        Add Contact
      </button>
      <br />
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Profile Pic</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img alt="headshot" src={hughie} />
            </th>
            <td>Hughie Campbell</td>
            <td>hughie@email.com</td>
            <td>555-555-5555</td>
          </tr>
          <tr>
            <th scope="row">
              <img alt="headshot" src={butcher} />
            </th>
            <td>William Butcher</td>
            <td>billy@email.com</td>
            <td>555-555-5554</td>
          </tr>
          <tr>
            <th scope="row">
              <img alt="headshot" src={mm} />
            </th>
            <td>Marvin Milk</td>
            <td>mm@email.com</td>
            <td>555-555-5553</td>
          </tr>
          <tr>
            <th scope="row">
              <img alt="headshot" src={frenchie} />
            </th>
            <td>Serge</td>
            <td>frenchie@email.com</td>
            <td>555-555-5552</td>
          </tr>
          <tr>
            <th scope="row">
              <img alt="headshot" src={kimiko} />
            </th>
            <td>Kimiko Miyahsiro</td>
            <td>thefemale@email.com</td>
            <td>555-555-5551</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

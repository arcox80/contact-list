import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
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
          <Contact />
        </tbody>
      </table>
    );
  }
}

export default ContactList;

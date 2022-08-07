import React from 'react';

function Contact() {
  return (
    <tr>
      <th scope="row" id={id}>
        <img alt="headshot" src={img_url} />
      </th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default Contact;

/*
      <tr>
        <th scope="row">
          <img alt="headshot" src='https://ibb.co/8D3nSNZ' />
        </th>
        <td>Hughie Campbell</td>
        <td>hughie@email.com</td>
        <td>555-555-5555</td>
      </tr>
      <tr>
        <th scope="row">
          <img alt="headshot" src='https://ibb.co/Lt3P1Wd' />
        </th>
        <td>William Butcher</td>
        <td>billy@email.com</td>
        <td>555-555-5554</td>
      </tr>
      <tr>
        <th scope="row">
          <img alt="headshot" src='https://ibb.co/cwwcKrB' />
        </th>
        <td>Marvin Milk</td>
        <td>mm@email.com</td>
        <td>555-555-5553</td>
      </tr>
      <tr>
        <th scope="row">
          <img alt="headshot" src='https://ibb.co/FBw0bf1' />
        </th>
        <td>Serge</td>
        <td>frenchie@email.com</td>
        <td>555-555-5552</td>
      </tr>
      <tr>
        <th scope="row">
          <img alt="headshot" src='https://ibb.co/rQS2g2J' />
        </th>
        <td>Kimiko Miyahsiro</td>
        <td>thefemale@email.com</td>
        <td>555-555-5551</td>
      </tr>
*/

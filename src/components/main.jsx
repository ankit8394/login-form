import React from 'react';

function main() {
  return (
    <>
    <div className="body">
  <form action="#">
    <h1>Login</h1>
    <div>
      <label htmlFor="name">Name:</label>
      <div>
        <i className="fa-solid fa-user" />
        <input type="text" id="name" placeholder="Name" required="" />
      <hr />
      </div>
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <div>
        <i className="fa-solid fa-envelope" />
        <input type="email" id="email" placeholder="Email" required="" />
    <hr />
      </div>
    </div>
    <div>
      <label htmlFor="pass">Password:</label>
      <div>
        <i className="fa-solid fa-key" />
        <input type="password" id="pass" placeholder="Password" required="" />
    <hr />
      </div>
    </div>
    <button id="btn" type="submit">
      Login
    </button>
  </form>
</div>
</>

  )
};

export default main;

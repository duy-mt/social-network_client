import React from 'react';
import '../styles'; // Import thư mục styles để liên kết index.js

const Register = () => {
  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input type="text" className="form-control" id="username" name="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input type="password" className="form-control" id="password" name="password" />
        </div>
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

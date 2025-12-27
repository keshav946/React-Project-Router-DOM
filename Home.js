import React from 'react';

function Home() {
  return (
    <div className="container-fluid">
      <h1>Welcome to Our Website</h1>
      <div className="row">
        <div className="col-sm-6">
          <h2>First Column</h2>
          <p>This is the first column of the home page.</p>
        </div>
        <div className="col-sm-6">
          <h2> Second column</h2> 
          <p>This is the second column of the home page.</p>
          <img src="images/3.jfif" className="img-responsive"/> 
        </div>
      </div>
    </div>
  );
}

export default Home;



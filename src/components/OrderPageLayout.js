import React from 'react';

export default function OrderPageLayout(props) {
  return (
    <div>
      <header>
        <div className="navbar-fixed">
          <nav className="light-blue darken-4">
            <a
              href="index.html"
              className="brand-logo"
              className="center-on-small-only">
              Galvanize Delivers
            </a>
            <ul className="right hide-on-med-and-down">
              <li className="active">
                <a href="order.html">Order Delivery</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="OrderPageLayout row">
        <div className="container col s12 m8">
          <h5>Menu</h5>
          {props.children[0]}
        </div>
        <div className="container col s12 m4">
          {props.children[1]}
          <div>
            {props.children[2]}
          </div>
        </div>
      </div>

      <footer className="page-footer blue darken-4 fixed">
        <p className="container blue darken-4 white-text thin">
          @ 2016 Galvanize Delivers
        </p>
        <br />
      </footer>
    </div>
  );
}

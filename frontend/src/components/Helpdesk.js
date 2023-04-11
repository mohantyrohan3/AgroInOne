import * as React from 'react';
import Container from 'react-bootstrap/Container';
import  './helpdesk.css';

export default function Helpdesk() {



  return (
    <>
      <br />
      <Container>
        <div className="container">
          <div className="search">
            <div className="row">
              <div className="col">
                <div className="search-1">
                  <input type="text" placeholder="Ask me Anything" />
                </div>
              </div>
            </div>
          </div>
        </div>




        <br />
        <div className="d-flex justify-content-center">
          <button className="button">Search</button>
        </div>

        <br />
        <section className="py-5">
          <div className="container">




            <div className="row">
              <div className="col-lg-6 mx-auto">


                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded help-card ">
                  <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
                  <p className="mb-0 mt-2 font-italic">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <a href="/" className="text-info">@consequat</a>."</p>
                  <footer className="blockquote-footer pt-4 mt-4 border-top">Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>

              </div>
            </div>
          </div>
        </section>






      </Container>

    </>
  );
}
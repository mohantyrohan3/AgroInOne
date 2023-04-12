import React from 'react'

export default function Helpdeskcard(props) {
  return (
    <>
    <br/>
    <section className="py-5">
    <div className="container">




      <div className="row">
        <div className="col-lg-6 mx-auto">


          <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded help-card ">
            <div className="blockquote-custom-icon bg-info shadow-sm"><i className="fa fa-quote-left text-white"></i></div>
            <p className="mb-0 mt-2 font-italic">{props.Data}</p>
            <footer className="blockquote-footer pt-4 mt-4 border-top">AgroInOne---
              <cite title="Source Title">Help Desk</cite>
            </footer>
          </blockquote>

        </div>
      </div>
    </div>
  </section>
  </>
  )
}

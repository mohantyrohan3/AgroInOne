import * as React from 'react';
import  "./Schemecard.css"
import Container from 'react-bootstrap/Container';



export default function SelectDropdown(props) {
  return (
    <>
      <Container>

                <article className="postcard light green">
          <a className="postcard__img_link" href={props.data.Links} target="_blank">
            <img className="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
          </a>
          <div className="postcard__text t-dark">
            <h1 className="postcard__title green"><a href={props.data.Links} target="_blank" >{props.data.Scheme_Name}</a></h1>
            <div className="postcard__subtitle small">
{/*               <time dateTime="2020-05-25 12:00:00">
                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
              </time> */}
            </div>
            <div className="postcard__bar"></div>
            <div className="postcard__preview-txt">{props.data.Description}</div>
            <ul className="postcard__tagbox">
{/*               <li className="tag__item">Podcast</li>
              <li className="tag__item">55 mins.</li> */}
              <li className="tag__item play green">
                <a href={props.data.Links} target="_blank" >Check Website</a>
              </li>
            </ul>
          </div>
        </article>




      </Container>
    </>

  );



}
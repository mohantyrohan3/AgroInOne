import React from 'react'
import "../Schemecard.css";
import Container from 'react-bootstrap/esm/Container';


export default function Predictcard() {
  return (
    <>
    <Container>
    <article className="postcard dark blue">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title blue"><a href="#">Crop Yield Prediction</a></h1>
				<div className="postcard__subtitle small">
					
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Crop yield prediction is a crucial aspect of agriculture and plays a significant role in food security and supply chain management. By utilizing various technologies and data analysis techniques, it is possible to predict the expected crop yield for a particular region or farm, based on factors such as weather patterns, soil health, and historical production data. Accurate crop yield prediction can help farmers and agribusinesses make informed decisions.
</div>
				<ul className="postcard__tagbox">
					{/* <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li> */}
					<li className="tag__item play blue">
						<a href="predict/crop">Check Here</a>
					</li>
				</ul>
			</div>
		</article>
		<article className="postcard dark red">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />	
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title red"><a href="#">Bank Approval Prediction</a></h1>
				<div className="postcard__subtitle small">
					
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
				<ul className="postcard__tagbox">
					{/* <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
					<li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li> */}
					<li className="tag__item play red">
						<a href="#">Check Here</a>
					</li>
				</ul>
			</div>
		</article>
        </Container>
    </>
  )
}

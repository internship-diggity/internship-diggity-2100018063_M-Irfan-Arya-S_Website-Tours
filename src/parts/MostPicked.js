import React from 'react'
import Button from 'elements/Button';
import { Fade } from "react-awesome-reveal";
import Fadee from "react-reveal/Fade";


export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
  <Fade direction="up" delay={500}>
    <h4 className="mb-3">Most Picked</h4>
    <div className="container-grid">
      {props.data.map((item, index) => {
        return (
          <div
            key={`mostpicked-${index}`}
            className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
          >
            <Fadee bottom delay={500 * index}>
            <div className="card card-featured">
              <div className="tag">
                ${item.price}
                <span className="font-weight-light"> per {item.unit}</span>
              </div>
              <figure className="img-wrapper">
                <img src={item.imageUrl} alt={item.name} />
              </figure>
              <div className="meta-wrapper">
                <Button
                  type="link"
                  className="streched-link d-block text-white"
                  href={`/properties/${item._id}`}
                >
                  <h5>{item.name}</h5>
                </Button>
                <span>{item.city}, {item.country}</span>
              </div>
            </div>
            </Fadee>
          </div>
        );
      })}
    </div>
  </Fade>
</section>

  )
}

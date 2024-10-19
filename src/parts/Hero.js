import React from 'react'
import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/Group.svg'
import IconTraveler from 'assets/images/icons/traveler.svg'
import IconTreasures from 'assets/images/icons/Gold.svg'

import Button from 'elements/Button';
import formatNumber from 'utils/formatNumber';

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }


  return (
    <section className="container pt-4">
        <div className="row align-items-center">
            <div className="col-auto pr-5" style={{width: 530}}>
                <h1 className="font-weight-bold line-height-1 mb-3">
                    Forget The Busy Work, <br /> and Start Your Vacation
                </h1>
                <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: "170%"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nunc vitae sem varius luctus. Donec non ligula a tortor tempor 
                </p>
                <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                    Show Me Now
                </Button>

                <div className="row" style={{marginTop: 80}}>
                    <div className="col-auto" style={{marginRight: 35}}>
                        <img src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
                        <h6 className="mt-3">
                            {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">Travelers</span>
                        </h6>
                    </div>
                    <div className="col-auto" style={{marginRight: 35}}>
                        <img src={IconCities} alt={`${props.data.cities} cities`} />
                        <h6 className="mt-3">
                            {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">Cities</span>
                        </h6>
                    </div>
                    <div className="col-auto">
                        <img src={IconTreasures} alt={`${props.data.treasures} Treasures`} />
                        <h6 className="mt-3">
                            {formatNumber(props.data.treasures)} <span className="text-gray-500 font-weight-light">Treasures</span>
                        </h6>
                    </div> 
                </div>
            </div>

            <div className="col-5 pl-5">
                <div style={{width: 540, height: 370}}>
                    <img src={ImageHero} alt="Room With Couches" className="img-fluid position-absolute" style={{margin:'-30px 0 0 -30px', zIndex: 1}}/>

                    <img src={ImageHero_} alt="Room With Couches Frame" className="img-fluid position-absolute" style={{margin:'0 -15px -15px 0'}}/>
                </div>
            </div>
        </div>
    </section>
  )
}

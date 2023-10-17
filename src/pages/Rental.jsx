import React from 'react';
import { useParams } from 'react-router-dom';
import testdata from '../data/testdata.json';
import Tag from '../components/Tag';
import CollapseBar from '../components/CollapseBar';
import Ratings from '../components/Ratings';
import ImageCarousel from '../components/ImageCarousel';

export default function Rental() {
  const rentalData = testdata;
  const rentalId = useParams();
  const rental = rentalData.find((thisrental) => thisrental.id === rentalId.id);

  const equipments = rental.equipments.map((equipment) => (
    <p key={'equipment' + equipment} className='collapse__dropdownInfoText'>
      {equipment}
    </p>
  ));

  return (
    <div className='rental'>
      <div className='rental__container'>
        <ImageCarousel pictures={rental.pictures} />
        <div className='rental__titleHostContainer'>
          <div className='rental__titleContainer'>
            <h1 className='rental__title'>{rental.title}</h1>
            <h2 className='rental__location'>{rental.location}</h2>
            <div className='rental__tags'>
              {rental.tags.map((tagInfo) => (
                <Tag key={tagInfo} tag={tagInfo} />
              ))}
            </div>
          </div>
          <div className='rental__hostContainer'>
            <div className='rental__hostInfoContainer'>
              <div className='rental__hostName'>{rental.host.name}</div>
              <div
                className='rental__hostImage'
                style={{
                  background: `url(${rental.host.picture})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
            <Ratings rating={rental.rating} />
          </div>
        </div>
        <div className='rentalInfo__Container'>
          <CollapseBar title='Description' content={rental.description} />
          <CollapseBar title='Équipments' content={equipments} />
        </div>
      </div>
    </div>
  );
}

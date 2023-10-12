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
  //   event.currentTarget.nextSibling.classList.toggle(
  //     'rentalInfo__dropdownInfoContainer--hidden'
  //   );
  //   event.currentTarget.children[1].classList.toggle(
  //     'rentalInfo__dropdownBarArrow--rotated'
  //   );
  // };

  const equipments = rental.equipments.map((equipment) => (
    <p key={'equipment' + equipment} className='collapse__dropdownInfoText'>
      {equipment}
    </p>
  ));
  
  return (
    <div className='rental'>
      <div className='rental__container'>
        <ImageCarousel pictures={rental.pictures}/>
        <div className='rental__titleHostContainer'>
          <div className='rental__titleContainer'>
            <h1 className='rental__title'>{rental.title}</h1>
            <h2 className='rental__location'>{rental.location}</h2>
            <Tag tags={rental.tags} />
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
          {/* <article className='rentalInfo__dropdown'>
            <div className='rentalInfo__dropdownBar' onClick={toggleMenuOpen}>
              <h2 className='rentalInfo__dropdownBarTitle'>Description</h2>
              <svg
                className='rentalInfo__dropdownBarArrow rentalInfo__dropdownBarArrow--rotated'
                xmlns='http://www.w3.org/2000/svg'
                width='33'
                height='32'
                viewBox='0 0 33 32'
                fill='none'
              >
                <path
                  d='M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z'
                  fill='white'
                />
              </svg>
            </div>
            <div className='rentalInfo__dropdownInfoContainer rentalInfo__dropdownInfoContainer--hidden'>
              <p className='rentalInfo__dropdownInfoText'>
                {rental.description}
              </p>
            </div>
          </article> */}

          <CollapseBar title='Description' content={rental.description} />

          {/* <article className='rentalInfo__dropdown'>
            <div className='rentalInfo__dropdownBar' onClick={toggleMenuOpen}>
              <h2 className='rentalInfo__dropdownBarTitle'>Équipments</h2>
              <svg
                className='rentalInfo__dropdownBarArrow rentalInfo__dropdownBarArrow--rotated'
                xmlns='http://www.w3.org/2000/svg'
                width='33'
                height='32'
                viewBox='0 0 33 32'
                fill='none'
              >
                <path
                  d='M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z'
                  fill='white'
                />
              </svg>
            </div>
            <div className='rentalInfo__dropdownInfoContainer rentalInfo__dropdownInfoContainer--hidden'>         
              {rental.equipments.map((equipment) => (
                <p key={equipment} className='rentalInfo__dropdownInfoText'>
                  {equipment}
                </p>
              ))}
            </div>
          </article> */}

          <CollapseBar title='Équipments' content={equipments} />
        </div>
      </div>
    </div>
  );
}

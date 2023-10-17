import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <div className='error404'>
      <div className='error404__container'>
        <h1 className='error404__404'>404</h1>
        <p className='error404__text'>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to='/' className='error404__Link'>
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

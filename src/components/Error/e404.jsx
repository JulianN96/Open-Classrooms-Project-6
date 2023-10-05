import React from 'react'
import { Link } from 'react-router-dom'

export default function e404() {
  return (
    <div>
      <h1>Erreur, cette page n'éxiste pas.</h1>
      <p>Clickez <Link to='/'>ici</Link> pour retourner a la page d'accueil.</p>
    </div>
  )
}

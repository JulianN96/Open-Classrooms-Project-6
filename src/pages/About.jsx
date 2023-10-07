import React, { useState } from 'react'
import TopBanner from '../components/TopBanner'
import Footer from '../components/Footer'

export default function About() {
  const[menuOpen, setMenuOpen] = useState(false)

  const toggleMenuOpen = event => {
    setMenuOpen (current => !current)
    console.log('toggled')
    console.log(event.currentTarget.children[1])
    if(menuOpen){
      event.currentTarget.parentElement.style.height = '52px';
    } else if (!menuOpen){
      event.currentTarget.parentElement.style.height = 'auto';
    }
    event.currentTarget.nextSibling.classList.toggle('aboutInfo__dropdownInfoContainer--hidden')
    event.currentTarget.children[1].classList.toggle('aboutInfo__dropdownBarArrow--rotated')
  }

  return (
    <div className='about'>
      <TopBanner />
      <div className='about__hero'/>
      <div className='aboutInfo__container'>
        <article className='aboutInfo__dropdown'>
          <div className='aboutInfo__dropdownBar' id='fiabilite' onClick={toggleMenuOpen}>
            <h2 className='aboutInfo__dropdownBarTitle'>Fiabilité</h2>
            <svg className='aboutInfo__dropdownBarArrow aboutInfo__dropdownBarArrow--rotated' xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
            </svg>
          </div>
          <div className='aboutInfo__dropdownInfoContainer aboutInfo__dropdownInfoContainer--hidden'><p className='aboutInfo__dropdownInfoText'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p></div>
        </article>
        <article className='aboutInfo__dropdown'>
          <div className='aboutInfo__dropdownBar' onClick={toggleMenuOpen}>
            <h2 className='aboutInfo__dropdownBarTitle'>Respect</h2>
            <svg className='aboutInfo__dropdownBarArrow aboutInfo__dropdownBarArrow--rotated' xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
            </svg>
          </div>
          <div className='aboutInfo__dropdownInfoContainer aboutInfo__dropdownInfoContainer--hidden'><p className='aboutInfo__dropdownInfoText'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></div>
        </article>
        <article className='aboutInfo__dropdown'>
          <div className='aboutInfo__dropdownBar' onClick={toggleMenuOpen}>
            <h2 className='aboutInfo__dropdownBarTitle'>Service</h2>
            <svg className='aboutInfo__dropdownBarArrow aboutInfo__dropdownBarArrow--rotated' xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
            </svg>
          </div>
          <div className='aboutInfo__dropdownInfoContainer aboutInfo__dropdownInfoContainer--hidden'><p className='aboutInfo__dropdownInfoText'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p></div>
        </article>
        <article className='aboutInfo__dropdown'>
          <div className='aboutInfo__dropdownBar' onClick={toggleMenuOpen}>
            <h2 className='aboutInfo__dropdownBarTitle'>Sécurité</h2>
            <svg className='aboutInfo__dropdownBarArrow aboutInfo__dropdownBarArrow--rotated' xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <path d="M15.2897 10.7897C15.9591 10.1202 17.0462 10.1202 17.7157 10.7897L27.9979 21.0719C28.6674 21.7414 28.6674 22.8285 27.9979 23.4979C27.3285 24.1673 26.2414 24.1673 25.572 23.4979L16.5 14.4259L7.42804 23.4926C6.75862 24.162 5.67148 24.162 5.00206 23.4926C4.33265 22.8231 4.33265 21.736 5.00206 21.0666L15.2843 10.7843L15.2897 10.7897Z" fill="white"/>
            </svg>
          </div>
          <div className='aboutInfo__dropdownInfoContainer aboutInfo__dropdownInfoContainer--hidden'><p className='aboutInfo__dropdownInfoText'>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond qux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos equipes de vérifier que les standards sont bien respectés. Nous organisons également des atelieres sur la sécurité domestique pour nos hôtes.</p></div>
        </article>
      </div>
      <Footer />
    </div>
  )
}

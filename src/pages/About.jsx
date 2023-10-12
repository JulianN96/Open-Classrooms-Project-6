import Hero from '../components/Hero';
import backgroundImg from '../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash-2.avif';
import CollapseBar from '../components/CollapseBar';

export default function About() {
  return (
    <div className='about'>
      <Hero background={backgroundImg} />

      <div className='aboutInfo__container'>
        <CollapseBar
          title='Fiabilité'
          content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        />
        <CollapseBar
          title='Respect'
          content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <CollapseBar
          title='Service'
          content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <CollapseBar
          title='Sécurité'
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond qux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos equipes de vérifier que les standards sont bien respectés. Nous organisons également des atelieres sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

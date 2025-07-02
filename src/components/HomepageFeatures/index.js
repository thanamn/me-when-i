import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Research Focus',
    icon: '🔍',
    description: (
      <>
        Digital semiotics and linguistic analysis of the "Me When I" Tim Cook meme, 
        examining how incomplete expressions function as meaningful cultural artifacts 
        in post-ironic internet communication.
      </>
    ),
  },
  {
    title: 'Theoretical Framework',
    icon: '📚',
    description: (
      <>
        Interdisciplinary approach drawing from Roland Barthes' semiotics, Jacques Derrida's 
        deconstruction, Sianne Ngai's affect theory, and Susan Sontag's cultural criticism 
        to analyze contemporary digital culture.
      </>
    ),
  },
  {
    title: 'Methodological Approach',
    icon: '🎓',
    description: (
      <>
        Autoethnographic case study employing close reading, visual analysis, and 
        cultural theory to understand how deliberate incompletion creates meaning 
        in digital spaces and friend networks.
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureCard)}>
        <div className={styles.featureIcon}>{icon}</div>
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

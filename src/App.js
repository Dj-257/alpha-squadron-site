import './App.css';
import Navbar from './components/Navbar'
import ParticlesHero from './components/ParticlesHero';
import About from './components/About';
import Lingo from './components/Lingo';
import Achievements from './components/Achievements';
import Team from './components/Team';
import Footer from './components/Footer';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Section({ id, children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
}

function App() {
  return (
    <>
    <Navbar/>
    <ParticlesHero/>
      <Section id='about'>
        <About/>
        <Lingo/>
      </Section>
    <Section id='achievements'>
      <Achievements/>
    </Section>
    <Section id='team'>
      <Team/>
    </Section>
    <Footer/>

    
    </>
  );
}

export default App;

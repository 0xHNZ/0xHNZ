import Hero from '@/components/Hero';
import Currently from '@/components/Currently';
import Projects from '@/components/Projects';
import Lab from '@/components/Lab';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import OnlineIndicator from '@/components/OnlineIndicator';

function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <ScrollProgress />
      <OnlineIndicator />
      <Hero />
      <Currently />
      <Projects />
      <Lab />
      <Footer />
    </div>
  );
}

export default App;

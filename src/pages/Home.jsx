import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { InteriorDisplay } from '../components/InteriorDisplay';
import { useApp } from '../context/AppContext';

export const Home = () => {
  const { dispatch } = useApp();

  useEffect(() => {
    const keyPressListener = (event) => {
      if (event.keyCode === 27) {
        dispatch({ type: 'VISIBILITY', payload: 'hidden' });
      }

      if (event.keyCode === 13) {
        dispatch({ type: 'VISIBILITY', payload: 'visible' });
      }
    };

    document.addEventListener('keydown', keyPressListener);

    return () => {
      document.removeEventListener('keydown', keyPressListener);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <main className="flex flex-col justify-between h-screen">
      <Header />
      <section className="relative grow">
        <InteriorDisplay />
      </section>
      <Footer />
    </main>
  );
};

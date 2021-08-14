import { useMedia } from 'use-media';

import { NavBar } from './components/organisms/NavBar/NavBar';
import { Hero } from './components/organisms/Hero/Hero';
import { DetailsSection } from './components/organisms/DetailsSection/DetailsSection';
import { Destination } from './components/organisms/Destination/Destination';

import styles from './App.module.css';

const App = () => {
  const isMobile = useMedia({ maxWidth: '600px' });

  return (
    <div className={styles.app}>
      <header className={isMobile ? styles.appHeader : ''}>
        <NavBar />
      </header>
      <Hero />
      <DetailsSection />
      <Destination />
      {/* <footer>
				<div>
					Icons made by{" "}
					<a
						href="https://www.flaticon.com/authors/pixel-perfect"
						title="Pixel perfect"
					>
						Pixel perfect
					</a>{" "}
					and{" "}
					<a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx">
						xnimrodx
					</a>{" "}
					from{" "}
					<a href="https://www.flaticon.com/" title="Flaticon">
						www.flaticon.com
					</a>
				</div>
			</footer> */}
    </div>
  );
};

export default App;

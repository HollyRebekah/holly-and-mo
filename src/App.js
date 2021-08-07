import { useMedia } from 'use-media';

import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';

import styles from './App.module.css';

const App = () => {
  const isMobile = useMedia({ maxWidth: '600px' });

  return (
    <div className={styles.app}>
      <header className={isMobile ? styles.appHeader : ''}>
        <NavBar />
      </header>
      <Hero />
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

import { useMedia } from 'use-media';

import { NavBar } from './components/organisms/NavBar/NavBar';
import { Hero } from './components/organisms/Hero/Hero';
import { Details } from './components/organisms/Details/Details';
import { Venue } from './components/organisms/Venue/Venue';
import { Accommodation } from './components/organisms/Accommodation/Accommodation';
import { Rsvp } from './components/organisms/RSVP/Rsvp';

import styles from './App.module.css';

const App = () => {
	const isMobile = useMedia({ maxWidth: '650px' });

  return (
    <div className={styles.app}>
		  <header className={isMobile ? styles.appHeader : ''}>
			  <NavBar />
		  </header>
		  <Hero />
		  <Details />
		  <Venue />
		  <Accommodation />
		  <Rsvp />
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

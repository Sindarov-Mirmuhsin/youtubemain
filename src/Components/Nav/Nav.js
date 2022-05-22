import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/Black.png';
import Home from '../../Assets/Images/homeimg.png';
import Trending from '../../Assets/Images/trending.png';
import Subscriptions from '../../Assets/Images/subscriptions.png';
import Library from '../../Assets/Images/library.png';
import History from '../../Assets/Images/history.png';
import Watch from '../../Assets/Images/watchlater.png';
import Star from '../../Assets/Images/star.png';
import Like from '../../Assets/Images/like.png';
import Music from '../../Assets/Images/music.png';
import Games from '../../Assets/Images/games.png';
import Info from '../../Assets/Images/infoimg.png';
import More from '../../Assets/Images/3tanuqta.png';
import './nav.css';

const Nav = () => {
	return (
		<nav className='nav'>
			<img className='nav-item__img' src={More} alt='More' />
			<img className='login__img' src={Logo} alt='site logo' />
			<div className='nav__list'>
				<NavLink className='nav__item links' to='/'>
					<img className='nav__img' src={Home} alt='home image' />
					<a className={`link`}>Home</a>
				</NavLink>
				<NavLink className='nav__item links' to='/trending'>
					<img src={Trending} alt='Trending' />
					<a className={`link`}>Trending</a>
				</NavLink>
				<NavLink className='nav__item links' to='/subscriptions'>
					<img src={Subscriptions} alt='Subscriptions' />
					<a className={`link`}>Subscriptions</a>
				</NavLink>
				<NavLink className='nav__item links' to='/library'>
					<img src={Library} alt='Library' />
					<a className={`link`}>Library</a>
				</NavLink>
				<NavLink className='nav__item links' to='/history'>
					<img src={History} alt='History' />
					<a className={`link`}>History</a>
				</NavLink>
				<NavLink className='nav__item links' to='/watch'>
					<img src={Watch} alt='Watch' />
					<a className={`link`}>Watch</a>
				</NavLink>
				<NavLink className='nav__item links' to='/star'>
					<img src={Star} alt='Star' />
					<a className={`link`}>Star</a>
				</NavLink>
				<NavLink className='nav__item links' to='/like'>
					<img src={Like} alt='Like' />
					<a className={`link`}>Like</a>
				</NavLink>
				<NavLink className='nav__item links' to='/music'>
					<img src={Music} alt='Music' />
					<a className={`link`}>Music</a>
				</NavLink>
				<NavLink className='nav__item links' to='/games'>
					<img src={Games} alt='Games' />
					<a className={`link`}>Games</a>
				</NavLink>
				<NavLink className='nav__item links' to='/info'>
					<img src={Info} alt='Info' />
					<a className={`link`}>Info</a>
				</NavLink>
			</div>
		</nav>
	);
};

export default Nav;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Favourites from './Favourites';
import Games from './Games';
import History from './History';
import Library from './Library';
import Like from './Like';
import More from './More';
import Subscriptions from './Subscriptions';
import Trending from './Trending';
import Watch from './Watch';

const AuthenticationApp = () => {
	return (
		<div className='auth'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/posts/:id' element={<Trending />} />
				<Route path='/posts' element={<Subscriptions />} />
				<Route path='/messages' element={<Library />} />
				<Route path='/bookmarks' element={<History />} />
				<Route path='/lists' element={<Watch />} />
				<Route path='/profile' element={<Favourites />} />
				<Route path='/more' element={<Like />} />
				<Route path='/logout' element={<Games />} />
				<Route path='/tweet' element={<More />} />
			</Routes>
		</div>
	);
};

export default AuthenticationApp;

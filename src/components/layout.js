import React from 'react';
import classnames from 'classnames';

import { Helmet } from 'react-helmet';

import Header from './header/Header';
import './reset.scss';
import './layout.scss';

const Layout = ({ children, isFullWidth = false, showHeader = true }) => (
	<>
		<Helmet>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,900;1,400&family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
		</Helmet>
		{
			showHeader && <Header />
		}
		<main className={classnames("content", {
			'content--condensed': !isFullWidth,
		})}>
			{children}
		</main>
	</>
);

export default Layout;

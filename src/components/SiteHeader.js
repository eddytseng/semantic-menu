import React, { Component } from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Menu from './Menu'
import Overlay from './Overlay'
import StyledListItem from './StyledListItem'
import { Search, ShoppingBag, MapPin, User } from 'react-feather'
import { blue, grey, alabaster, lightgrey } from '../utils/colors'



const SiteHeaderMainNav = styled.nav`
	background-color: white;
	box-shadow: 0 8px 24px 0 rgba(0,0,0,0.5);
	margin: 0;
	padding: 0;

	width: 85vw;
	height: 100vh;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;

	@media only screen and (min-width: 1024px) {
		background-color: ${alabaster};
		box-shadow: unset;

		width: 100%;
		height: unset;

		position: unset;
		top: unset;
		left: unset;
		z-index: unset;
	}
`

const MenuBar = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;

	@media only screen and (min-width: 1024px) {
		display: flex;
		justify-content: center;
		align-items: center;
	
		box-shadow: unset;
		background-color: transparent;
		margin: 0 auto;
		max-width: 1280px;
	}
`

const TopHeader = styled.div`
	padding: 0;
	margin: 0;

	@media only screen and (min-width: 1024px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		padding: 20px;
	}
`
const SearchInputContainer = styled.div`
	flex: 1 1 auto;
	margin: 0 20px;

	position: relative
`

const StyledSearchInput = styled.input`
	background-color: ${alabaster};
	border: 1px solid ${lightgrey};
	border-radius: 4px;
	box-sizing: border-box;
	font-family: 'Neue Haas Grotesk Text Std';
	font-size: 14px;
	line-height: 1;
	padding: 10px 16px 11px;
	
	width: 100%;
`
	
const FlexContainer = styled.div`
	@media only screen and (min-width: 1024px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const StyledLink = styled.button`
	background-color: transparent;
	border: none;
	color: ${blue};
	font-family: 'Neue Haas Grotesk Text Std', Helvetica, Arial, sans-serif;
	font-size: 13px;
	line-height: 20px;
	padding: 0 10px 0 0;
	margin: 0 10px 0 0;
	position: relative;
	text-decoration: underline;
	&:after {
		position: absolute;
		top: 0;
		right: 0;

		background-color: black;
		content: '';
		display: block;
		height: 20px;
		width: 1px;
	}
	&:last-child {
		margin-right: 0;
		padding-right: 0;
	}
	&:last-child:after {
		display: none;
	}
`


export default class SiteHeader extends Component {
	state = {
		shoppingBag: [
			{ product: 1 },
			{ product: 2 },
			{ product: 3 },
			{ product: 4 },
			{ product: 5 },
		],
		menu: [
			{
				title: 'Shop Tile',
				menu: [
					{
						title: 'By Use',
						menu: [
							{
								title: 'Backsplash',
								url: '/product/list/backplash'
							},
							{
								title: 'Floor',
								url: '/product/list/backplash'
							},{
								title: 'Shower',
								url: '/product/list/backplash'
							},
							{
								title: 'Outdoor',
								url: '/product/list/backplash'
							},
							{
								title: 'Countertop',
								url: '/product/list/backplash'
							},
							{
								title: 'Trim',
								url: '/product/list/backplash'
							},
						]
					},
					{
						title: 'By Material',
						menu: [
							{
								title: 'Porcelain',
								url: '/product/list/porcelain',
							},
							{
								title: 'Ceramic',
								url: '/product/list/porcelain',
							},
							{
								title: 'Stone',
								url: '/product/list/porcelain',
							},
							{
								title: 'Glass',
								url: '/product/list/porcelain',
							},
							{
								title: 'Glass & Stone',
								url: '/product/list/porcelain',
							},
							{
								title: 'Cement',
								url: '/product/list/porcelain',
							},
							{
								title: 'Metal',
								url: '/product/list/porcelain',
							},
							{
								title: 'Resin',
								url: '/product/list/porcelain',
							},
						]
					},
					{
						title: 'By Look/Style',
						menu: [
							{ 
								title: 'Wood Look',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Subway',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Glass',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Encaustic Look',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Brick Look',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Hexagon',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Chevron',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Arabesque',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Basketweave',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Dimensional',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Ledger',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Solid Look',
								url: '/products/list/wood-look',
							},
							{ 
								title: 'Marble Look',
								url: '/products/list/wood-look',
							},
							{
								title: 'Stone Look',
								url: '/products/list/wood-look',
							},
						],
					},
					{
						title: 'Featured',
						menu: [
							{ title: 'New Arrivals', url: '/new-arrivals' }
						]
					},
					{
						title: 'By Collection',
						url: '/'
					},
					{
						title: 'Sale',
						url: '/sale'
					},
				]
			},
			{
				title: 'Gallery',
				url: 'gallery'
			},
			{
				title: 'Blog',
				url: 'blog'
			},
			{
				title: 'Professionals',
				menu: [
					{ title: 'Contractors', url: '/' },
					{ title: 'Designers/Architects', url: '/' },
					{ title: 'Dealers', url: '/' },
				],
			},
			{
				title: 'Resources',
				menu: [
					{ title: 'Slab Buying Guide', url: '/' },
					{ title: 'How It\'s Made', url: '/' },
				]
			},
		]
	}

	render() {
		const { shoppingBag } = this.state

		return (
			<div>
				<TopHeader>
					<Logo />

					<SearchInputContainer>
						<Search color={grey} style={{ position: 'absolute', top: '50%', right: '14px', transform: 'translateY(-50%)' }}/>
						<StyledSearchInput type="search" placeholder="Search" />
					</SearchInputContainer>

					<FlexContainer>
						<FlexContainer style={{ marginRight: 20 }}>
							<MapPin style={{ marginRight: 10 }}/>

							<StyledLink type="button">California</StyledLink>
							<StyledLink href="/find-a-store">Find A Store</StyledLink>
						</FlexContainer>

						<FlexContainer style={{ marginRight: 20 }}>
							<ShoppingBag style={{ marginRight: 10 }} />

							<StyledLink href="/shoppingbag">Shopping Bag ({shoppingBag.length})</StyledLink>
						</FlexContainer>

						<FlexContainer>
							<User style={{ marginRight: 10 }}/>

							<StyledLink href="/login">Login</StyledLink>
							<StyledLink href="/signup">Signup</StyledLink>
						</FlexContainer>
					</FlexContainer>
				</TopHeader>

				<Overlay />

				<SiteHeaderMainNav aria-label="Bedrosians Tile &amp; Stone">
					<MenuBar role="menubar" aria-label="Bedrosians Tile &amp; Stone">
						{this.state.menu.map((menuItem) => {
							if (menuItem.menu) {
								return <Menu key={menuItem.title} title={menuItem.title} menu={menuItem.menu} />
							} else {
								return (
									<StyledListItem key={menuItem.title}>
										<TopLevelNav role="menuitem" href={menuItem.url}>{menuItem.title}</TopLevelNav>
									</StyledListItem>
								)
							}
						})}
					</MenuBar>
				</SiteHeaderMainNav>
			</div>
		)
	}
}

const TopLevelNav = styled.a`
	display: block;

	background-color: transparent;
	box-sizing: border-box;
	color: black;
	font-family: 'Neue Haas Grotesk Display Std';
	font-weight: 500;
	font-size: 14px;
	line-height: 1;
	margin: 0;
	padding: 21px 24px;
	text-decoration: none;

	@media only screen and (min-width: 1024px) {
		padding: 13px 12px;
		transition: background-color 0.2s;
		&:hover {
			background-color: ${blue};
			color: white;
			text-decoration: none;
		}
	}
`
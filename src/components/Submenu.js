import React, { Component } from 'react'
import styled from 'styled-components'
import { ChevronRight } from 'react-feather'
import { blue, lightgrey } from '../utils/colors'
import { radius } from '../utils/radius'
import MenuItem from './MenuItem'

const StyledList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;

	@media only screen and (min-width: 1024px) {
		background-color: white;
		box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
		box-sizing: border-box;
		border-top-right-radius: ${radius};
		border-bottom-right-radius: ${radius};
		border-bottom-left-radius: ${radius};
		border: 1px solid ${lightgrey};
		padding: 4px 0;

		position: absolute;
		top: -5px;
		left: 100%;
		z-index: 1;
	}
`

const Button = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	background-color: rgba(0,255,255,0.3);
	border: none;
	box-sizing: border-box;

	color: black;
	font-family: 'Neue Haas Grotesk Display Std';
	font-weight: 500;
	font-size: 14px;
	line-height: 1;
	outline: none;
	padding: 21px 16px 21px 24px;
	text-align: left;
	text-decoration: none;
	
	width: 100%;
	
	@media only screen and (min-width: 1024px) {
		padding: 11px 12px;
		transition: background-color 0.2s;
		cursor: pointer;
		&:hover {
			background-color: ${blue}
			color: white;
			text-decoration: none;
		}
	}
`

export default class SubMenu extends Component {
	state = {
		showing: false
	}

	closeMenu = (event) => {
		if (event.type === 'click' && !this.dropdownMenu.contains(event.target)) {
			this.setState({ showing: false }, () => {
				document.removeEventListener('click', this.closeMenu);
				document.removeEventListener('keyup', this.closeMenu);
			})
		} else if (event.keyCode === 27) {
			this.setState({ showing: false }, () => {
				document.removeEventListener('click', this.closeMenu);
				document.removeEventListener('keyup', this.closeMenu);
			})
		} else if (event.type === 'mouseleave') {
			this.setState({ showing: false }, () => {
				document.removeEventListener('click', this.closeMenu);
				document.removeEventListener('keyup', this.closeMenu);
			})
		}
	}

	openMenu = (event) => {
		this.setState({ showing: true }, () => {
			document.addEventListener('click', this.closeMenu);
			document.addEventListener('keyup', this.closeMenu);
		})
	}

	render() {
		const { showing } = this.state
		const { menu, title } = this.props

		return (
			<li style={{ position: 'relative', margin: 0 }} onMouseLeave={this.closeMenu}>
				<Button
					id=""
					aria-controls=""
					aria-haspopup="true"
					aria-expanded={showing ? true : false}
					onClick={this.openMenu}
					onMouseOver={this.openMenu}
				>
					{title}
					<ChevronRight color={lightgrey} style={{ marginLeft: 24 }} size={18}/>
				</Button>

				{showing &&
					<StyledList role="menu" id="" aria-labelledby="" ref={(element) => (this.dropdownMenu = element)}>
						{menu.map((menuItem) => <MenuItem key={menuItem.title} url={menuItem.url}>{menuItem.title}</MenuItem>)} 
					</StyledList>
				}
			</li>
		)
	}
}
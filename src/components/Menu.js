import React, { Component } from 'react'
import styled from 'styled-components'
import { ChevronDown } from 'react-feather'
import { blue, grey, lightgrey } from '../utils/colors'
import { radius } from '../utils/radius';
import MenuItem from './MenuItem'
import StyledListItem from './StyledListItem'
import Submenu from './Submenu'

const StyledButton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: transparent;
	border: none;
	box-sizing: border-box;
	color: black;
	font-family: 'Neue Haas Grotesk Display Std';
	font-weight: 500;
	font-size: 14px;
	line-height: 1;
	outline: none;
	margin: 0;
	padding: 21px 16px 21px 24px;
	white-space: nowrap;

	width: 100%;

	@media only screen and (min-width: 1024px) {
		justify-content: flex-start;

		cursor: pointer;
		padding: 11px 12px;
		position: relative;
		transition: background-color 0.2s;

		width: unset;

		&:hover {
			background-color: ${blue};
			color: white;
		}
	}
`

const SubMenuContainer = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	
	@media only screen and (min-width: 1024px) {
		background-color: white;
		border: 1px solid ${lightgrey};
		border-bottom-right-radius: ${radius};
		border-bottom-left-radius: ${radius};
		box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
		padding: 4px 0;

		position: absolute;
		top: 100%;
		left: 0;
		z-index: 10;
	}
`

export default class Menu extends Component {
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
			<StyledListItem onMouseLeave={this.closeMenu}>
				<StyledButton
					id=""
					aria-controls=""
					aria-haspopup="true"
					aria-expanded={showing ? true : false}
					onClick={this.openMenu}
					onMouseOver={this.openMenu}
				>
					{title}
					<ChevronDown color={grey} size={18} style={{ marginLeft: 8 }} />
				</StyledButton>

				{showing &&
					<SubMenuContainer role="menu" id="" aria-labelledby="" ref={(element) => (this.dropdownMenu = element)}>
						{menu.map((menuItem) => {
							if (menuItem.menu) {
								return (<Submenu key={menuItem.title} title={menuItem.title} menu={menuItem.menu} />)
							}

							return (<MenuItem key={menuItem.title} url={menuItem.url}>{menuItem.title}</MenuItem>)
						})}
					</SubMenuContainer>
				}
			</StyledListItem>
		)
	}
}
import React from 'react'
import styled from 'styled-components'
import { blue } from '../utils/colors'

const StyledLink = styled.a`
	display: block;

	background-color: transparent;
	box-sizing: border-box;
	color: black;
	font-family: 'Neue Haas Grotesk Display Std';
	font-weight: 500;
	font-size: 14px;
	line-height: 1;
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

const MenuItem = (props) => (
	<li role="none" style={{ margin: 0, padding: 0 }}>
		<StyledLink role="menuitem" href={props.url}>{props.children}</StyledLink>
	</li>
)

export default MenuItem
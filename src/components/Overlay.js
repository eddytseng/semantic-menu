import React from 'react'
import styled from 'styled-components'

const StyledOverlay = styled.div`
	background-color: rgba(0,0,0,0.7);
	width: 100vw;
	height: 100vh;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	@media only screen and (min-width: 1024px) {
		display: none;
	}
`

const Overlay = (props) => <StyledOverlay>{props.children}</StyledOverlay>

export default Overlay
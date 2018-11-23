import React, { Component } from 'react'

export default class MyFirstComponent extends Component {
	state = {
		likesApplesauce: false
	}

	toggleLikesApplesauce = () => {
		this.setState((state) => ({ likesApplesauce: !state.likesApplesauce }))
	}

	render() {
		const { likesApplesauce } = this.state

		if (!likesApplesauce) {
			return (
				<div>
					<div>I do not like Applesauce</div>
					<button onClick={this.toggleLikesApplesauce}>Like Applesauce</button>
				</div>
			)
		}

		return (
			<div>
				<div>Now, I like applesauce.</div>
				<button onClick={this.toggleLikesApplesauce}>Dislike Applesauce</button>
			</div>
		)
	}
}
import React from "react"
import axios from "axios"
export default class PersonList extends React.Component {
	state = {
		name: "thien@onskyinc.com",
		password: "12345612",
	}

	handleChange = () => {
		this.setState({
			name: "thien@onskyinc.com",
			password: "12345612",
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()

		const user = {
			UserName: this.state.name,
			Password: this.state.password,
		}

		axios
			.post(`https://api.onskycloud.com/authen/v1/api/auth/client`, user)
			.then((res) => {
				console.log(res)
				console.log(res.data)
			})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Person Name:
						<input type="text" name="name" onChange={this.handleChange} />
					</label>
					<button type="submit">Add</button>
				</form>
			</div>
		)
	}
}

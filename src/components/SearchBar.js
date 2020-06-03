import React, { Component } from "react";
import Table from "./Table";
import employees from "../employees";

class SearchBar extends Component {
	state = {
		employees: employees,
		search: "",
	};

	componentDidMount() {
		this.setState({ employees: employees });
	}

	handleInputChange = (event) => {
		const { value } = event.target;
		this.setState({
			search: value,
		});
	};

	searchEmployees = (query) => {
		const filteredEmployees = this.state.employees.filter(
			(employee) =>
				employee.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
		);
		return filteredEmployees;
	};

	render() {
		return (
			<div>
				<nav style={styles.navbar} className="navbar navbar-light bg-light">
					<form className="form-inline">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search employees"
							aria-label="Search"
							value={this.state.search}
							onChange={this.handleInputChange}
						/>
					</form>
				</nav>
				<Table employees={this.searchEmployees(this.state.search)} />
			</div>
		);
	}
}

export default SearchBar;

const styles = {
	navbar: {
		margin: 0,
		padding: 30,
		display: "flex",
		justifyContent: "center",
	},
};

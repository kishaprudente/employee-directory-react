import React, {  useState, useEffect } from "react";
import Table from "./Table";
import employees from "../employees";

const SearchBar = () => {
	const [employeesState, setEmployeesState] = useState(employees);
	const [searchState, setSearchState] = useState("");

	useEffect(() => { 
		setEmployeesState(employees) 
	}, []);

	const searchEmployees = (query) => {
		const filteredEmployees = employeesState.filter(
			(employee) => {
				return employee.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
			}
		);
		return filteredEmployees;
	};

	return (
		<div>
			<nav style={styles.navbar} className="navbar navbar-light bg-light">
				<form className="form-inline">
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search employees"
						aria-label="Search"
						value={searchState}
						onChange={(e) => setSearchState(e.target.value)}
					/>
				</form>
			</nav>
			<Table employees={searchEmployees(searchState)} />
		</div>
	);
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

import React from "react";

export default () => {
	return (
		<nav style={styles.navbar} className="navbar navbar-light bg-light">
			<form className="form-inline">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
			</form>
		</nav>
	);
};

const styles = {
	navbar: {
		margin: 0,
		padding: 30,
		display: "flex",
		justifyContent: "center",
	},
};

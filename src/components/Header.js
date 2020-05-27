import React from "react";

export default () => {
	return (
		<div style={styles.header} className="jumbotron jumbotron-fluid bg-info">
			<div className="container">
				<h1 className="display-4">Employee Directory</h1>
				<p className="lead">Say hello to your team.</p>
			</div>
		</div>
	);
};

const styles = {
	header: {
		color: "white",
		display: "flex",
		textAlign: "center",
	},
};

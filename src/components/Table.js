import React from "react";
import faker from "faker";
import ListItem from "./ListItem";

const employees = [
	{
		image: faker.image.avatar(),
		name: "Kisha Prudente",
		phone: faker.phone.phoneNumberFormat(),
		email: "kisha@testo.com",
		dob: "09/23/93",
	},
	{
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "02/23/92",
	},
	{
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "08/13/01",
	},
	{
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "11/02/98",
	},
	{
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "01/28/83",
	},
	{
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "09/26/91",
	},
	{
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "06/11/89",
	},
	{
		image: faker.image.avatar(),
		name: faker.name.findName(),
		phone: faker.phone.phoneNumberFormat(),
		email: faker.internet.email(),
		dob: "05/17/99",
	},
];

export default () => {
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Image</th>
					<th scope="col">Name</th>
					<th scope="col">Phone</th>
					<th scope="col">Email</th>
					<th scope="col">DOB</th>
				</tr>
			</thead>
			<ListItem employees={employees} />
		</table>
	);
};

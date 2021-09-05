import { Fragment, useEffect, useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import api from "../service/api";
import NavBar from "../components/NavBar";
import CountryCard from "../components/CountryCard";
import AppContainer from "../components/AppContainer";

const Main = () => {
	const initData = { isFetching: false, data: null };
	const [countries, setCountries] = useState(initData);

	useEffect(() => {
		setCountries({ ...initData, isFetching: true });
		api.get("content").then((response) => {
			console.log(response);
			setCountries({ isFetching: false, data: response.data.data });
		});
	}, []);

	if (countries.isFetching) {
		return (
			<Fragment>
				<NavBar />
				<AppContainer>Is fetching...</AppContainer>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<NavBar />
			<AppContainer>
				<h1>Countrie</h1>
				<Grid container spacing={2}>
					{countries.data &&
						countries.data.map((country, i) => {
							return (
								<Grid item xs={3} key={i}>
								<CountryCard countryName={country.name} />
								</Grid>
							);
						})}
				</Grid>
			</AppContainer>
		</Fragment>
	);
};

export default Main;

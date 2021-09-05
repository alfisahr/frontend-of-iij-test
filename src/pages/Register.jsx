import { Fragment } from "react";
import {Link} from 'react-router-dom';
import NavBar from "../components/NavBar";
import AppContainer from "../components/Container";
import { Card, CardContent, Grid, TextField, Button, Typography } from "@material-ui/core";

const Register = () => {
	return (
		<Fragment>
			<NavBar />
			<AppContainer>
				<Grid container justifyContent="center">
					<Grid item xs={6}>
						<Card variant="outlined" style={{padding: '30px'}}>
							<CardContent>
							<Typography variant="h4" gutterBottom>
        Register
      </Typography>
								<TextField
									id="email-input"
									label="Name"
									type="text" style={{width: '100%', marginBottom: '30px'}}
								/>
								<TextField
									id="email-input"
									label="Email"
									type="text" style={{width: '100%', marginBottom: '30px'}}
								/>
								<TextField
									id="filled-password-input"
									label="Password"
									type="password"
									autoComplete="current-password" style={{width: '100%', marginBottom: '30px'}}
								/>
								<TextField
									id="filled-password-input"
									label="Re-Type Password"
									type="password"
									autoComplete="current-password" style={{width: '100%', marginBottom: '30px'}}
								/>
								<Button variant="contained" color="primary">
  Register
</Button>
<p>Already have an account? <Link to="/login">Login</Link></p>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</AppContainer>
		</Fragment>
	);
};

export default Register;

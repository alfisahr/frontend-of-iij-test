import {Container, AppBar, Toolbar, Typography} from '@material-ui/core';

const NavBar = () => {
	return (
		<AppBar position="static">
		<Container maxWidth="md">
			<Toolbar>
				<Typography variant="h6">
					IIJ Test
				</Typography>
			</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;

import { Container } from "@material-ui/core";

const AppContainer = (props) => {
	return (
		<div className="content-wrapper">
			<Container maxWidth="md">{props.children}</Container>
		</div>
	);
};

export default AppContainer;

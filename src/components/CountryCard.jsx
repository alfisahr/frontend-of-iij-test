import { styled } from '@material-ui/core/styles';

const Card = styled('div')({
	border: '1px solid #ddd',
  	padding: '5px',
  	borderRadius: '3px',
});

const CountryCard = (props) => {
	return <Card>
		{props.countryName}
	</Card>;
}

export default CountryCard;
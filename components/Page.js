import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Cards, CountryPicker, Chart } from './data';
import { fetchData } from './api';

// import Image from '../public/static/image.png';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  image: {
    width: '370px',
    marginTop: '50px',
  },
});

class Page extends React.Component {
  /*eslint-disable*/
  state = {
    data: {},
    country: '',
  };



  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async country => {
    const data = await fetchData(country);

    this.setState({ data, country });
  };

  render() {
    const { data, country } = this.state;
    const classes = useStyles();
    return (
      <div className={classes.container}>
        {/* <img className={classes.image} src={Image} alt="COVID-19" /> */}
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default Page;

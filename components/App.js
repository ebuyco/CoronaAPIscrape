import React from 'react';

import { Cards, CountryPicker, Chart } from './data';
import { fetchData } from './api';
import styles from './css/App.module.css';

import Image from '../public/static/image.png';

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

    return (
      <div className={styles.container}>
        <img className={styles.image} src={Image} alt="COVID-19" />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />

        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default Page;

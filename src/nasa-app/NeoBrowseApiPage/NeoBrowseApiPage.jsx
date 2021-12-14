import { Fragment, useEffect, useState } from "react";
import styled from 'styled-components'

import { getAsteroids } from "../../util/ApiService";
import Button from "../../components/Button"
import Table from "../../components/Table"
import Spacer from "../../components/Spacer/Spacer";
import Loader from "../../components/Loader/Loader";
const DEFAULT_PAGE = 0;
const DEFAULT_SIZE = 10;

const tableColumns = [
  { title: "Neo Reference Id", field: "neo_reference_id"},
  { title: "Name", field: "name"},
  { title: "Absolute Magnitude", field: "absolute_magnitude_h"},
  { title: "Detailed Url", field: "nasa_jpl_url",
  render: (rowdata) =>
      (
        <Button primary label="Details" onClick={() =>{window.open(rowdata.nasa_jpl_url, '_blank')}}/>
      )
}
]

const NeoBrowseApiPage = () => {
  const [defaultAsteroidsList, setDefaultAsteroidsList] = useState([{}]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getAsteroids(DEFAULT_PAGE, DEFAULT_SIZE)
      .then((data) => {
        const tableData = data.near_earth_objects.map(({ neo_reference_id, name, absolute_magnitude_h, nasa_jpl_url }) => {return {neo_reference_id,name, absolute_magnitude_h, nasa_jpl_url}});
        setDefaultAsteroidsList(tableData);
        setIsLoaded(true);
      })
      .catch((err) => {
        console.log(err?.message || err);
      });
  }, []);

  return (
    isLoaded ? (<div>
      <Spacer axis={'vertical'} size={55} />
      <Title> Neo Browse API</Title>
      <Spacer axis='vertical' size={55} />
      <Table tableColumns={tableColumns} tableData={defaultAsteroidsList}/>
    </div>) :(
    <Loader />
    )
  );
};

export default NeoBrowseApiPage;

const Title = styled.p`
font-weight: bold;
font-size: 1.35em;
`
import { useEffect,useState} from 'react';
import styled from "styled-components";

import ReactJson from 'react-json-view'
import Spacer from '../../components/Spacer';
import {getDateWise} from '../../util/ApiService'
import Loader from '../../components/Loader';
import moment from "moment";
import Button from '../../components/Button';

const NeoFeedApiPage = () => {
 const [data,setData] =  useState({});
 const [isLoaded,setIsLoaded] =  useState(false);
 const [renderJson,setRenderJson] =  useState(false);
 const [startValue, setStartValue] = useState('')
 const [endValue, setEndValue] = useState('')
const getDateWiseResult =() =>{
  if(startValue === '' || endValue === ''){
    alert('Select Date')
    return;
  }
  setRenderJson(true)
  getDateWise(startValue,endValue).then((data) => {
    setData(data);  
    setIsLoaded(true);
    console.log(data);
  }).catch((e) => {
    console.log(e.error_message);
    alert(e.error_message)
  }) 
}

 const formatDate = (v) => {
  return v ? moment(v).format('YYYY-MM-DD'): ""
}
// const updateValue = (v) => {
//   let newValue = undefined;
//     newValue = moment(v, "YYYY-MM-DD")
//   setStartValue(newValue);
//   setEndValue(newValue);
// }


const onChangeStart = (e) => {
  // updateValue(e.target.value);
  setStartValue(e.target.value);

};
const onChangeEnd = (e) => {
  // updateValue(e.target.value);
  setEndValue(e.target.value);

};

  return ( 
      <div>
      <Spacer axis={'vertical'} size={55} />
      <Title> Neo Browse API</Title>
      <Spacer axis='vertical' size={55} />
      <DateWrapper>
      <DateLabel>Select Start Date:</DateLabel>
      <input type="date" onChange={onChangeStart} value={formatDate(startValue)}/>
      <DateLabel>Select End Date:</DateLabel>
      <input type="date" onChange={onChangeEnd} value={formatDate(endValue)}/>
      <Button primary label="Search" onClick={getDateWiseResult}/>
      </DateWrapper>
      <Spacer axis={'vertical'} size={55} />
      {renderJson && (isLoaded ? <ReactJson src={data}/> : <Loader />)}
      </div>
  );
}

const DateWrapper = styled.div`
display:flex;
justify-content: space-around;
`

const Title = styled.p`
font-weight: bold;
font-size: 1.35em;
`
const DateLabel =styled.p`
font-size: 1em;
align-self: center;
`

export default NeoFeedApiPage;

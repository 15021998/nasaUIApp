import React, {useState} from 'react'
import styled from 'styled-components'
import SearchInput from '../../components/SearchInput'
import Button from '../../components/Button'
import Spacer from '../../components/Spacer'
import ReactJson from 'react-json-view'
import {getAsteroidById} from "../../util/ApiService"
import Loader from "../../components/Loader"

const NeoLookupApiPage = () => {
    const [buttonDisable, setButtonDisable] = useState(true);
    const [renderTable, setRenderTable] = useState(false);
    const [neoId, setNeoId] = useState('');
    const [defaultAsteroidsList, setDefaultAsteroidsList] = useState([{}]);

    const updateInput = (e) => {
        setRenderTable(false)
        e.target.value.length < 1 ? setButtonDisable(true) : setButtonDisable(false)
        setNeoId(e.target.value)
    }
    const getAsteroidsByIdRef= (neoId) =>{
        getAsteroidById(neoId)
        .then((data) => {
            setDefaultAsteroidsList(data);
            setRenderTable(true);
        })
        .catch((err) => {
            console.log(err?.message || err);
        });
    }
    const handleSearch = () => {
        getAsteroidsByIdRef(neoId);
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value >= 1) {
            getAsteroidsByIdRef(neoId);
        }
    }
    return (
       <div>
            <Spacer axis={'vertical'} size={55} />
            <Title>Neo Lookup API</Title>
            <Spacer axis='vertical' size={55} />
            <SearchBar>
                <SearchInput type="number" label="Search by Neo Reference Id" onKeyDown={handleKeyDown} onChange={updateInput} />
                <Button onClick={handleSearch} primary disabled={buttonDisable}>Search</Button>
            </SearchBar>
            <Spacer axis='vertical' size={55} />
            {renderTable && <ReactJson src={defaultAsteroidsList} /> }
        </div>
    )
}
const Title = styled.p`
font-weight: bold;
font-size: 1.35em;
`
const SearchBar = styled.div`
display: flex;
justify-content: space-between;
`

export default NeoLookupApiPage

import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <Wrapper>
    <p>
      Nothing here, go back to <Link to="/">home</Link>
    </p>
  </Wrapper>
)

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export default NotFound

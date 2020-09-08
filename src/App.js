import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import Quotes from './components/Quotes'

/*
global fetch
*/

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #606c88 0%, #606c88 40%, #3f4c6b 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #cccccc;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  &:hover {
    cursor: pointer;
    background-size: 400px;
}
`

function App () {
  const [results, getResults] = useState({})

  const readAPI = async () => {
    const api = await fetch('https://got-quotes.herokuapp.com/quotes')
    const result = await api.json()
    getResults(result)
  }

  useEffect(() => {
    readAPI()
  }, [])

  return (
    <Container>
      <Quotes results={results} />
      <Button onClick={readAPI}>Get Quotes</Button>
    </Container>
  )
}

export default App

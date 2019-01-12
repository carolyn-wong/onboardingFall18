import styled from 'styled-components'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
})

const SearchInput = styled.input`
    margin: 1em 1em 1em 3em;
`

const SearchTitle = styled.h2`
    color: indianred;
    font-size: 1.5em;
    margin: 1em 1em 0.25em 1.25em;
    font-family: 'Titillium Web', sans-serif;
`
export { SearchInput, SearchTitle }
  
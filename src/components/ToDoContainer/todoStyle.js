import styled from 'styled-components'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
})

const TodoTitle = styled.h1`
    color: indianred;
    font-size: 3em;
    margin: 0.5em;
    font-family: 'Titillium Web', sans-serif;
`

const NoToDo = styled.p`
    margin: 1em 1em 1em 2em;
`

export { TodoTitle, NoToDo }

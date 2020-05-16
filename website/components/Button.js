import styled from 'styled-components'
import { colours, unit } from '../styles/theme';

export default Button = ({ children }) => {

    const Button = styled.button`
        background-color: ${colours.light};
        color: ${colours.dark};
        height: ${unit(5)};
    `

    return <Button>{children}</Button>
}

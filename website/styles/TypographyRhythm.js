import { unit } from '../data/variables'
import styled  from 'styled-components'

export default `
    h1  {
        
    }
    h2  {
        margin-bottom: ${unit(2)};
    }
    h3  {
        margin-bottom: ${unit(2)};
    }

    h4  {
        margin-top: ${unit(2)};
        margin-bottom: ${unit(1)};
    }
    h5  {
        margin-bottom: ${unit(2)};
    }
    h6  {
        margin-bottom: ${unit(2)};
    }
    p {
        margin-top: ${unit(1)};
        margin-bottom: ${unit(4)};
    }

`
// export default function TypographicRhythm ({ children }) {
//     return <Rhythm>{ children }</Rhythm>
// }
    
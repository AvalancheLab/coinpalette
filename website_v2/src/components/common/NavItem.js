import React from 'react'

export default function NavItem ({ link, children }) {
    return <p><a href={link}>{children}</a></p>
}


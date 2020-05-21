import React from 'react'

export default function Link ({ to : link, children }) {
    return <a rel="noopener noreferrer" target="_blank" href={link}>{children}</a>
}
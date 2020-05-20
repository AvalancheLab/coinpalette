import React from 'react'

export default function Link ({ to : link, children }) {
    return <a href={link}>{children}</a>
}
import React from 'react'
import {Redirect} from 'react-router'
import {auth} from './firebase'

const adminList = ['ubUAyr2Ek9bYQhhTE5oVJ0XB7WA3','6S36oWUNKJWwK2Ji1te5jS2k6M32' ]
function Guard(props) {
    return (
    <div>{props.children}</div>
    )
}

export default Guard;

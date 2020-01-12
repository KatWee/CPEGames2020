import React from 'react'
import {withRouter} from 'react-router'

const myStorage = localStorage;
function Guard(props) {
    if(!myStorage.getItem('admin'))
    {
        //console.log('redirrecting')
        props.history.push('/user')
    }
     console.log(myStorage.getItem('admin'))
    return props.children
}

export default withRouter(Guard);

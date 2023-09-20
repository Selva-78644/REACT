import React from 'react'
import Child from './Child'

function Parent(){
    return(
        <>
        <Child name='Selva'/>
        <p>my ID {PaymentResponse.data.title}</p>
        <h2>{PaymentResponse.data.msg}</h2>
        </>
    )
}export default Parent;
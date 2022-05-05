import React from 'react'

export const personaAction = () => {


    const setCount = (value) => ({type: 'setCount', payload: value})

    return {setCount}
}

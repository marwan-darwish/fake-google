import React from 'react'
import Loader from 'react-loader-spinner'
export const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Loader type="Hearts" color="red" height={550} width={200}/>
        </div>
    )
}

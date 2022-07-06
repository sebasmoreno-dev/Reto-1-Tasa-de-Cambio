import React, { useEffect, useState } from 'react'

export const GetRates = ({to, price = "", value}) => {


  return (
    <>
    {
      price && (
      <div className="card text-center m-3">
            <div className="card-body">
                ${value} USD = {price * value} {to}
            </div>
        </div>
      )
    }
    </>
  )
}
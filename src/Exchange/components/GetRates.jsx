import React, { useEffect, useState } from 'react'

export const GetRates = () => {

  const [exchanged, setExchanged] = useState(null);

  useEffect(() => {
    fetch('https://openexchangerates.org/api/latest.json?app_id=a29dd408540f4f4bab229095d9a4bd5d&%26base=USD&symbols=COP')
      .then(response => response.json())
      .then(data => setExchanged(data && data.rates.COP));

  }, [])
  

  return (
    <>
      <div className="card text-center m-3">
            <div className="card-body">
                1.00 USD = {exchanged}
            </div>
        </div>
    </>
  )
}

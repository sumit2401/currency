import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState('')
  const [grossAnnualSalary, setGrossAnnualSalary] = useState(2000)
  const [localCurrencySalary, setLocalCurrencySalary] = useState('')
  const [managementFee, setManagementFee] = useState('')
  const [fxRate, setFxRate] = useState('')

  const handleSubmit = async () => {
    try {
      // Check if selectedCurrency is empty
      if (!selectedCurrency) {
        throw new Error("Client invoice currency cannot be empty");
      }

      const payload = {
        client_invoice_currency: selectedCurrency,
        gross_annual_salary_in_client_invoice_currency: grossAnnualSalary,
        country_of_employment: "india",
        fx_rate: parseFloat(fxRate)
      }

      const response = await axios.post('https://api.1eor.com/api/v1/costcalculator/upsert-costcalculator-key', payload, { headers: { "key": " sR3pK@t8qF!zW7dV#oHg2eX$uYtM5fR6nA!jB9cDmT#pL@wO4" } })
      console.log('Data:', response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value)
  }

  return (
    <>
      <div className="flex flex-row justify-between">
        <h2>Logo</h2>
        <p className='text-blue-950 text font-semibold'>Global employer cost calculator</p>
      </div>

      <div className='mt-4 border-2 border-gray-950'>
        <h5 className='align-middle text-white bg-blue-950'>Client Employee Variables</h5>
        <div className='flex justify-between'>
          <label htmlFor="">Client Invoice Currency</label>
          <select name="" id="" className='bg-gray-400 text-xs font-medium' value={selectedCurrency} onChange={handleCurrencyChange}>
            <option value="Australian Dollar">Australian Dollar</option>
            <option value="US Dollar">US Dollar</option>
            <option value="EURO">EURO</option>
            <option value="CANADIAN DOLLAR">CANADIAN DOLLAR</option>
            <option value="BRITISH POUND">BRITISH POUND</option>
          </select>
        </div>

        <div className='flex border-2 border-gray-200 justify-between'>
          <label htmlFor="">Gross annual salary in Client Invoice Currency</label>
          <input className='bg-blue-200 text-xs text-right' type="text" value={grossAnnualSalary} onChange={(e) => setGrossAnnualSalary(e.target.value)} />
        </div>
        <div className='flex border-2 border-gray-200 justify-between'>
          <label htmlFor="">Country of Employment</label>
          <select className='bg-blue-200 text-xs'>
            <option value="india">India</option>
          </select>
        </div>

        <div className='flex justify-between border-2 border-gray-200'>
          <label htmlFor="">Gross annual salary in Local currency</label>
          <input className='bg-blue-200 text-xs text-right' type="text" value={localCurrencySalary} onChange={(e) => setLocalCurrencySalary(e.target.value)} />
        </div>

        <div className='flex justify-between border-2 border-gray-200'>
          <label htmlFor="">Monthly Management Fee- in Client Invoice Currency</label>
          <input className='bg-blue-200 text-xs text-right' type="text" value={managementFee} onChange={(e) => setManagementFee(e.target.value)} />
        </div>
        <div className='flex justify-between border-2 border-gray-200'>
          <label htmlFor="">FX Rate</label>
          <input className='bg-blue-200 text-xs text-right' type="text" value={fxRate} onChange={(e) => setFxRate(e.target.value)} />
        </div>
      </div>

      <div className='mt-4'>
        <button className='bg-blue-950 text-white px-4 py-2 rounded' onClick={handleSubmit}>Submit</button>
      </div>

      {/* Monthly employer */}
      <div className='mt-8'>
        <h4 className='align-middle text-white bg-blue-950'>Monthly Employer Costs</h4>
        <div className="table w-full divide-y">
          <thead className="justify-between">
            <tr className='flex justify-end gap-36 border-2 border-gray-200'>
              <th className='text-'>Australian Dollar</th>
              <th>Indian Rupee</th>
            </tr>
          </thead>
          <tbody>
            {/* Your table body content goes here */}
          </tbody>
        </div>
      </div>
    </>
  )
}

export default App

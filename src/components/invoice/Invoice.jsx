import React, { useState } from 'react'
import Button from '../global/button';

function Invoice() {

  const products = [
    {productname: 'Product 1', productprice: '120'},
    {productname: 'Product 2', productprice: '80'},
    {productname: 'Product 3', productprice: '170'},
    {productname: 'Product 4', productprice: '230'},
    {productname: 'Product 5', productprice: '140'},
  ];

  const tableHeading = ["Product Name", "Qty", "Price", "Action"];

  const [selectedProduct, setSelectedProducts] = useState ([]);

  return (
    <div className='flex items-start gap-4 mt-6'>
      <div className='w-1/2 bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Product List</h2>
        <div className='flex items-center gap-3.5 rounded-lg'>
          <input type="text" className='bg-gray-100 text-gray-900 border-0 rounded-md p-2 w-full focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150' placeholder="Search Item" />
          <Button type="submit" className="btn" title={'Search'}/>
        </div>
        <ul>
          {products.map((item, index) => (
            <li key={index} className='mt-2'>
              <div className='flex items-center gap-2'>
                <h6 className='text-[18px] font-medium text-gray-900 w-full'>{item.productname}</h6>
                <span className='min-w-[50px] px-2 text-[18px] font-medium text-gray-900'>{item.productprice}</span>
                <Button type='submit' className='btn-sm' title={'Add'} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 bg-white rounded-lg shadow-md p-6">
        <table className='w-full'>
          <thead>
            <tr className='bg-[#f7f7f8]'>
              {
                tableHeading.map((item, index) => (
                  <th key={index} className='p-4 text-left'>{item}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-4 text-left'>One</td>
              <td className='p-4 text-left'>Two</td>
              <td className='p-4 text-left'>Three</td>
              <td className='p-4 text-left'>
                <Button type='submit' className='btn-del-sm' title={'Del'}/>
              </td>
            </tr>
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default Invoice
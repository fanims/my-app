import React, { useState } from 'react';
import Button from '../global/button';

function InvoiceGpt() {
  const products = [
    { productname: 'Product 1', productprice: '120' },
    { productname: 'Product 2', productprice: '80' },
    { productname: 'Product 3', productprice: '170' },
    { productname: 'Product 4', productprice: '230' },
    { productname: 'Product 5', productprice: '140' },
  ];

  const tableHeading = ["Product Name", "Qty", "Price", "Action"];

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddProduct = (product) => {
    setSelectedProducts((prev) => [
      ...prev,
      {
        ...product,
        qty: 1, // default quantity
      },
    ]);
  };

  const handleRemoveProduct = (index) => {
    setSelectedProducts((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQty = (index, newQty) => {
    setSelectedProducts((prev) => {
      const updated = [...prev];
      updated[index].qty = newQty;
      return updated;
    });
  };

  return (
    <div className='flex items-start gap-4 mt-6'>
      {/* Product List */}
      <div className='w-1/2 bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>Product List</h2>
        <div className='flex items-center gap-3.5 rounded-lg'>
          <input
            type="text"
            className='bg-gray-100 text-gray-900 border-0 rounded-md p-2 w-full focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150'
            placeholder="Search Item"
          />
          <Button title={'Search'} />
        </div>
        <ul>
          {products.map((item, index) => (
            <li key={index} className='mt-2'>
              <div className='flex items-center gap-2'>
                <h6 className='text-[18px] font-medium text-gray-900 w-full'>{item.productname}</h6>
                <input
                  type="number"
                  placeholder='0'
                  className='max-w-[80px] text-center'
                  value={0}
                  disabled
                />
                <span className='min-w-[50px] px-2 text-[18px] font-medium text-gray-900'>{item.productprice}</span>
                <button
                  className='cursor-pointer text-blue-600 hover:underline'
                  onClick={() => handleAddProduct(item)}
                >
                  Add
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Invoice Table */}
      <div className="w-1/2 bg-white rounded-lg shadow-md p-6">
        <table className='w-full'>
          <thead>
            <tr className='bg-[#f7f7f8]'>
              {tableHeading.map((item, index) => (
                <th key={index} className='p-4 text-left'>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map((product, index) => (
              <tr key={index}>
                <td className='p-4'>{product.productname}</td>
                <td className='p-4'>
                  <input
                    type="number"
                    min="1"
                    value={product.qty}
                    onChange={(e) => updateQty(index, parseInt(e.target.value))}
                    className='w-16 border border-gray-300 rounded px-2 py-1'
                  />
                </td>
                <td className='p-4'>{product.productprice}</td>
                <td className='p-4'>
                  <button
                    onClick={() => handleRemoveProduct(index)}
                    className='cursor-pointer px-2 py-1 bg-red-600 text-white rounded'
                  >
                    Del
                  </button>
                </td>
              </tr>
            ))}
            {selectedProducts.length === 0 && (
              <tr>
                <td colSpan={4} className='p-4 text-center text-gray-500'>
                  No products added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InvoiceGpt;

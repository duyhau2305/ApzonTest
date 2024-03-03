import React from 'react';
import InvoiceForm from '../Component/InvoiceForm';

const SaleInvoice = () => {
  const onSubmit = (data) => {
    console.log('Sale Invoice submitted with data:', data);
    // Xử lý logic khi form được submit
  };

  return (
    <InvoiceForm formType="customer" onSubmit={onSubmit} />
  );
};

export default SaleInvoice;

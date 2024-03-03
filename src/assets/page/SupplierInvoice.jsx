import React from 'react';
import InvoiceForm from '../Component/InvoiceForm';

const SupplierInvoice = () => {
  const onSubmit = (data) => {
    console.log('Supplier Invoice submitted with data:', data);
    // Xử lý logic khi form được submit
  };

  return (
    <InvoiceForm formType="supplier" onSubmit={onSubmit} />
  );
};

export default SupplierInvoice;

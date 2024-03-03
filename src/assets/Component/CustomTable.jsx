import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Snackbar, Alert, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function CustomTable({ data, idKey,  selectedId, selectedDate,  onConfirmCancel }) {
  const filteredItems = data.filter(item => item[idKey] === selectedId);
  const filteredOrders = filteredItems.length > 0 ? filteredItems[0].orders.filter(order => order.date === selectedDate) : [];
  
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [showTable, setShowTable] = useState(true); 
  const [showButtons, setShowButtons] = useState(true); 

  const handleSaveButtonClick = () => {
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  const handleCancelClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmCancel = () => {
    setOpenDialog(false);
    setShowTable(false); 
    setShowButtons(false); 
    onConfirmCancel(); 
  };
  // Styles được áp dụng trực tiếp
  const tableStyle = {
    width: '100%',
    marginBottom: '20px',
  };

  const tableHeadStyle = {
    backgroundColor: '#e0e0e0', 
    
  };

  const tableRowStyle = {
   
    '&:hover': {
      backgroundColor: '#f5f5f5', 
    },
  };

  const tableCellStyle = {
    borderRight: '1px solid #FFFFFF',
    textAlign: 'center',
    
  };
  const tableCellStyle2 = {
    borderRight: '1px solid #EEEEEE',
    textAlign: 'center', 
    
  };

  const buttonStyle = {
    marginRight: '10px',
    textTransform: 'none',
    color: '#000000',
    border: '1px solid #EEEEEE',
    backgroundColor: '#ffffff',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  };

  return (
    <>
      {showTable && (
        <TableContainer component={Paper} style={tableStyle}>
          <Table>
            <TableHead style={tableHeadStyle}
              >
              <TableRow style={tableRowStyle}
                >
                <TableCell style={tableCellStyle }>#</TableCell>
                <TableCell style={tableCellStyle }>Mã mặt hàng</TableCell>
                <TableCell style={tableCellStyle }>Tên mặt hàng</TableCell>
                <TableCell style={tableCellStyle }>Số lượng</TableCell>
                <TableCell style={tableCellStyle }>Đơn giá</TableCell>
                <TableCell >Thành tiền</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map((order, idx) => (
                order.items.map((item, idx) => (
                  <TableRow key={order.date + '-' + idx}>
                    <TableCell style={tableCellStyle2}>{idx + 1}</TableCell>
                    <TableCell style={tableCellStyle2}>{item.productId}</TableCell>
                    <TableCell style={tableCellStyle2}>{item.productName}</TableCell>
                    <TableCell style={tableCellStyle2}>{item.quantity}</TableCell>
                    <TableCell style={tableCellStyle2}>{item.unitPrice.toLocaleString('vi-VN', { currency: 'VND' }).replace(/\u00A0/g, '')} VND</TableCell>
                    <TableCell>{(item.quantity * item.unitPrice).toLocaleString('vi-VN', { currency: 'VND' }).replace(/\u00A0/g, '')} VND</TableCell>
                  </TableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        {showButtons && (
          <>
            <Button
              style={buttonStyle }
              onClick={handleSaveButtonClick}
            >
              Lưu
            </Button>
            <Button
              
              onClick={handleCancelClick}
              style={buttonStyle }
            >
              Hủy
            </Button>
          </>
        )}
        <Snackbar open={showSnackbar} autoHideDuration={600} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
            Lưu thành công!
          </Alert>
        </Snackbar>
      </div>
      {/* Dialog for confirming cancellation */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Xác nhận hủy</DialogTitle>
        <DialogContent>
          <div>Bạn có chắc chắn muốn hủy không?</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Không
          </Button>
          <Button onClick={handleConfirmCancel} color="primary">
            Có
          </Button>
        </DialogActions>
      </Dialog>
      {/* End of Dialog */}
    </>
  );
}

export default CustomTable;

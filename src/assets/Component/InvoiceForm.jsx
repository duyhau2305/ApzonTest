import React, { useState } from 'react';
import { Box, Grid, TextField, Typography, InputAdornment, FormControl, Select, MenuItem, List, ListItem, ListItemText } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { customers, suppliers } from '../page/mockData';
import CustomTable from './CustomTable';

const SharedInvoiceForm = ({ formType }) => {
  const { control, handleSubmit } = useForm();
  const [entityId, setEntityId] = useState('');
  const [entityName, setEntityName] = useState('');
  const [matchingEntities, setMatchingEntities] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [showCustomTable, setShowCustomTable] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setShowCustomTable(true);
  };

  const handleEntityIdChange = (event) => {
    const enteredId = event.target.value.toUpperCase();
    setEntityId(enteredId);

    const data = formType === 'customer' ? customers : suppliers;
    const matchedEntity = data.find((item) => item[`${formType}Id`] === enteredId);
    if (matchedEntity) {
      setEntityName(matchedEntity[`${formType}Name`]);
    } else {
      setEntityName('');
    }

    const matchedEntities = data.filter((item) => item[`${formType}Id`].toUpperCase().includes(enteredId));
    setMatchingEntities(matchedEntities);
  };

  const handleEntitySelection = (selectedEntityId) => {
    const selectedEntity = matchingEntities.find((entity) => entity[`${formType}Id`] === selectedEntityId);
    if (selectedEntity) {
      setEntityId(selectedEntity[`${formType}Id`]);
      setEntityName(selectedEntity[`${formType}Name`]);
    }
    setMatchingEntities([]);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    calculateTotalAmount(entityId, event.target.value);
  };

  const calculateTotalAmount = (entityId, date) => {
    const data = formType === 'customer' ? customers : suppliers;
    const entity = data.find((item) => item[`${formType}Id`] === entityId);
    if (entity) {
      const ordersOnDate = entity.orders.filter((order) => order.date === date);
      const total = ordersOnDate.reduce((acc, order) => {
        return acc + order.items.reduce((orderAcc, item) => orderAcc + (item.quantity * item.unitPrice), 0);
      }, 0);
      setTotalAmount(total.toLocaleString('vi-VN', { currency: 'VND' }));
    } else {
      setTotalAmount('');
    }
  };

  const handleConfirmCancel = () => {
    setEntityId('');
    setEntityName('');
    setSelectedDate('dd/mm/yyy');
    setTotalAmount('');
    setShowCustomTable(false);
  };

  return (
    <Box sx={{ maxWidth: 950, margin: 'auto', mt: 2 }} component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom sx={{ textAlign: 'left', margin: '20px 0 40px' }}>
        {formType === 'customer' ? 'Đơn Bán Hàng' : 'Đơn Mua Hàng'}
      </Typography>

      <Grid container rowSpacing={2} columnSpacing={10}>
        {/* Mã khách hàng/nhà cung cấp */}
        <Grid item container spacing={2} alignItems="right" xs={4} sm={6}>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom 
            style={{borderBottom:'1px dotted #EEEEEE', paddingBottom:'11px'}}>
              Mã {formType === 'customer' ? 'khách hàng' : 'nhà cung cấp'}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="entityId"
              variant="standard"
              value={entityId}
              onChange={handleEntityIdChange}
            />
            {matchingEntities.length > 0 && (
              <List
                sx={{
                  position: 'absolute',
                  zIndex: 9999,
                  overflow: 'auto',
                  maxHeight: 200,
                  background: '#FFFFFF'
                }}
              >
                {matchingEntities.map(entity => (
                  <ListItem button key={entity[`${formType}Id`]} onClick={() => handleEntitySelection(entity[`${formType}Id`])}>
                    <ListItemText primary={entity[`${formType}Id`]} />
                  </ListItem>
                ))}
              </List>
            )}
          </Grid>
        </Grid>
        {/* Ngày chứng từ */}
        <Grid item container spacing={2} alignItems="center" xs={4} sm={6}>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom
             style={{borderBottom:'1px dotted #EEEEEE', paddingBottom:'11px'}}>
              Ngày chứng từ
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Controller
              name="entityDate"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  id="entity-date"
                  variant="standard"
                  type="date"
                  onChange={(e) => {
                    field.onChange(e);
                    handleDateChange(e);
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        {/* Tên khách hàng/nhà cung cấp */}
        <Grid item container spacing={2} alignItems="center" xs={4} sm={6}>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom
              style={{borderBottom:'1px dotted #EEEEEE', paddingBottom:'11px'}}>
              Tên {formType === 'customer' ? 'Khách Hàng' : 'Nhà Cung Cấp'}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="entityName"
              variant="standard"
              value={entityName}
            />
          </Grid>
        </Grid>

        {/* Tổng tiền */}
        <Grid item container spacing={2} alignItems="center" xs={4} sm={6}>
          <Grid item xs={4}>
            <Typography variant="body2" gutterBottom
              style={{borderBottom:'1px dotted #EEEEEE', paddingBottom:'11px'}}>
              Tổng tiền
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="totalAmount"
              variant="standard"
              value={totalAmount}
              InputProps={{
                endAdornment: <InputAdornment position="start">VND</InputAdornment>,
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 400, marginY: 4 }}>
        <Select
          labelId="select-detail-label"
          id="select-detail"
          value={showCustomTable}
          onChange={() => setShowCustomTable(!showCustomTable)}
          label="Chi tiết"
          sx={{
            color: '#00CCFF',
            backgroundColor: 'transparent',
            fontWeight: 'bold',
            borderRadius: 'none',
            fontSize: 20,
          }}
        >
          <MenuItem value={true}>Chi Tiết</MenuItem>
          <MenuItem value={false}>Ẩn</MenuItem>
        </Select>
      </FormControl>

      {showCustomTable && (
        <CustomTable
          data={formType === 'customer' ? customers : suppliers}
          idKey={formType === 'customer' ? 'customerId' : 'supplierId'}
          nameLabel={formType === 'customer' ? 'customerName' : 'supplierName'}
          selectedId={entityId}
          selectedDate={selectedDate}
          onConfirmCancel={handleConfirmCancel}
        />
      )}
    </Box>
  );
};

export default SharedInvoiceForm;

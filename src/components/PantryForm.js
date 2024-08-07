// src/components/PantryForm.js
import { Button, Grid, TextField, Typography } from '@mui/material';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const PantryForm = ({ currentItem, onClearCurrentItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');
  const [itemId, setItemId] = useState('');

  useEffect(() => {
    if (currentItem) {
      setItemName(currentItem.name);
      setItemQuantity(currentItem.quantity);
      setItemId(currentItem.id);
    }
  }, [currentItem]);

  const addItem = async () => {
    if (!itemName || !itemQuantity) return;
    await addDoc(collection(db, 'pantry'), {
      name: itemName,
      quantity: itemQuantity,
    });
    clearForm();
  };

  const updateItem = async () => {
    if (!itemId || !itemName || !itemQuantity) return;
    await updateDoc(doc(db, 'pantry', itemId), {
      name: itemName,
      quantity: itemQuantity,
    });
    clearForm();
  };

  const clearForm = () => {
    setItemName('');
    setItemQuantity('');
    setItemId('');
    onClearCurrentItem();
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Pantry Item Form
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Item Name"
            fullWidth
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Item Quantity"
            fullWidth
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={itemId ? updateItem : addItem}>
            {itemId ? 'Update Item' : 'Add Item'}
          </Button>
          {itemId && (
            <Button
              variant="contained"
              color="secondary"
              onClick={clearForm}
              style={{ marginLeft: '10px' }}
            >
              Cancel
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default PantryForm;

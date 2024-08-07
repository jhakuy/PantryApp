// src/components/PantryList.js
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

const PantryList = ({ onEdit }) => {
  const [pantryItems, setPantryItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'pantry'));
      setPantryItems(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'pantry', id));
    setPantryItems(pantryItems.filter(item => item.id !== id));
  };

  const handleEdit = (item) => {
    onEdit(item);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Pantry Items
      </Typography>
      <List>
        {pantryItems.map(item => (
          <ListItem
            key={item.id}
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(item)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </>
            }
          >
            <ListItemText primary={`${item.name} - ${item.quantity}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PantryList;

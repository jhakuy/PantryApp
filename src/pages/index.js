// src/pages/index.js
import { Container, Typography } from '@mui/material';
import { useState } from 'react';
import PantryForm from '../components/PantryForm';
import PantryList from '../components/PantryList';

export default function Home() {
  const [currentItem, setCurrentItem] = useState(null);

  const handleEditItem = (item) => {
    setCurrentItem(item);
  };

  const clearCurrentItem = () => {
    setCurrentItem(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Pantry App
      </Typography>
      <PantryForm currentItem={currentItem} onClearCurrentItem={clearCurrentItem} />
      <PantryList onEdit={handleEditItem} />
    </Container>
  );
}

import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppthemeContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleTheme } = useAppthemeContext();

  return (
    <Routes>
      <Route
        path='/pagina-inicial'
        element={
          <Button variant='contained' color='primary' onClick={toggleTheme}>
            Teste
          </Button>
        }
      ></Route>
      <Route path='*' element={<Navigate to='/pagina-inicial'></Navigate>}></Route>
    </Routes>
  );
};

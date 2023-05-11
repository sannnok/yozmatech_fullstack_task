import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Dashboard} from './pages/Dashboard';
import {UserProfile} from './pages/UserProfile';
import {TableList} from './pages/TableList';
import {RootLayout} from './layouts/RootLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/user-profile" element={<UserProfile />}></Route>
        <Route path="/table-list" element={<TableList />}></Route>
        <Route index element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default App;

import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Frontpage from './pages/Frontpage/Frontpage';
import RootLayout from './layouts/RootLayout/RootLayout';
import Magazine from './pages/Magazine/Magazine';
import Podcast from './pages/Podcast/Podcast';
import Authors from './pages/Authors/Authors';
import { articles } from '/public/data/articles';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<RootLayout />}>
      <Route index element={<Frontpage data={articles} />} />
      <Route path={'magazine'} element={<Magazine data={articles} />} />
      <Route path={'podcast'} element={<Podcast />} />
      <Route path={'authors'} element={<Authors />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { Route } from 'react-router-dom';

import ProtectedRoute from '@/components/protected-route';
import HomePage from '@/pages/home-page';
import PostPage from '@/pages/post-page';
import SignInPage from '@/pages/sign-in-page';

export const routes = (
  <>
    <Route path="/" element={<SignInPage />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/app" element={<HomePage />} />
      <Route path="/post/:id" element={<PostPage />} />
    </Route>
  </>
);

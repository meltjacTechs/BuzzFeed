import { Routes, Route } from 'react-router-dom';
import SignupForm from './_auth/forms/SignupForm';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import './globals.css';

const App = () => {
  return (
   <main className="flex h-screen">
    <Routes>
      <Route element={ <AuthLayout />}>
          {/* public routes */}
           <Route path="/sign-in" element={<SigninForm />} />
           <Route path="/sign-up" element={<SignupForm />} />
      </Route>
      <Route element={ <RootLayout />}>
 {        /* private routes */}
           <Route index element={<Home />} />
      </Route>
    </Routes>
   </main>
  );
}

export default App;

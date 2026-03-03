// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


import {lazy, Suspense} from 'react'
import LoadingSpinner from './components/LoadingSpinner.tsx'

const Dashboard = lazy(() => import('./pages/Dashboard.tsx'))
const Profile = lazy(() => import('./pages/Profile.tsx'))
const Settings = lazy(() => import('./pages/Settings.tsx'))


function App() {
  return (
    <div className="app">
      <h1>My React App</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <Dashboard />
        <Profile />
        <Settings />
      </Suspense>
    </div>
  )
}
export default App

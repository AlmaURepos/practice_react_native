import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import ErrorFallback from './ErrorFallback'
import './App.css'


const Dashboard = lazy(() => import('./pages/Dashboard'))
const Profile = lazy(() => import('./pages/Profile'))
const Settings = lazy(() => import('./pages/Settings'))

function LoadingSpinner() {
  return <div>Loading...</div>
}

function App() {
  return (
    <Router>
      <div>
        <h1>Lab 7.2: Error Handling with Error Boundaries</h1>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
        </nav>

        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  )
}

export default App

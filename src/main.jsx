import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './utilities/providers/AuthProvider'
import routes from './utilities/routers/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='text-primary-black'>
        <RouterProvider router={routes} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)

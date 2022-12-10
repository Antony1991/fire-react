import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/zh-CN/component/:name" element={<Layout />} />
    </Routes>
  )
}

function Layout() {
  return (
    <div>
      <div className="doc-content">
        <div className="doc-content-document isComponent">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App

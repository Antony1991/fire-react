import React from 'react'
import { Outlet, Route, Routes, HashRouter, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import RemarkGfm from 'remark-gfm'
import RemarkDirective from 'remark-directive'
import routes from './router'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/zh-CN/component/:name" element={<ComponentItem />} />
      </Routes>
    </HashRouter>
  )
}
const ComponentItem: React.FC = () => {
  const params = useParams()
  const item: any = routes.find((v) => v.name === params.name)
  return (
    <ReactMarkdown
      children={item.component as string}
      remarkPlugins={[RemarkGfm, RemarkDirective]}
    />
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

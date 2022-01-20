import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../UI/Layout'
import ExperienceContainer from '../Containers/Experience/Experience'
import DocuSign from '../Containers/Experience/dApp/DocuSign/DocuSign'

export function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ExperienceContainer />} />
          <Route path="/DocuSign" element={<DocuSign />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './Admin.css'

function Admin() {
  const isAdmin = true // TODO: replace with real RBAC
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState([])
  const [validated, setValidated] = useState(false)

  const handleFile = (e) => {
    const f = e.target.files[0]
    setFile(f)
    setValidated(false)
    setPreview([])
  }

  const validateFile = () => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => {
      const lines = e.target.result.split(/\r?\n/).slice(0, 50)
      setPreview(lines.map((line) => line.split(',')))
      setValidated(true)
    }
    reader.readAsText(file)
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Admin</h2>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Usuários &amp; Guias</li>
            <li>Trilhas</li>
            <li>Expedições</li>
            <li>Financeiro</li>
            <li>CMS</li>
            <li className="active">Integrações</li>
            <li>Configurações</li>
          </ul>
        </nav>
      </aside>
      <main className="admin-content">
        <header className="admin-header">
          <h1>Cadastur (CSV)</h1>
          <div className="actions">
            <a className="button" href="/api/admin/cadastur/export">Exportar CSV</a>
          </div>
        </header>

        <section className="block">
          <h2>Instruções &amp; Download de Template</h2>
          <p>Faça upload de um CSV UTF-8 com headers exatamente conforme o template.</p>
          <div className="buttons">
            <a className="button" href="/api/admin/cadastur/template">Baixar Template CSV</a>
            <a className="button" href="/api/admin/cadastur/export">Baixar Base Atual</a>
          </div>
        </section>

        <section className="block">
          <h2>Upload &amp; Validação</h2>
          <input type="file" accept=".csv" onChange={handleFile} />
          <div className="options">
            <label>
              <input type="checkbox" /> Substituir base atual
            </label>
            <label>
              <input type="checkbox" /> Desativar guias não presentes no novo CSV
            </label>
          </div>
          <button className="button" onClick={validateFile}>Validar arquivo</button>
          {validated && (
            <div className="preview">
              <h3>Preview (até 50 linhas)</h3>
              <table>
                <tbody>
                  {preview.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <section className="block">
          <h2>Resumo da Reconciliação (simulação)</h2>
          <div className="summary-cards">
            <div className="card">Novos: 0</div>
            <div className="card">Atualizados: 0</div>
            <div className="card">Sem mudança: 0</div>
            <div className="card">A desativar: 0</div>
          </div>
          <button className="button" disabled={!validated}>Executar Importação</button>
        </section>

        <section className="block">
          <h2>Histórico de Imports</h2>
          <table className="history">
            <thead>
              <tr>
                <th>Data/Hora</th>
                <th>Ator</th>
                <th>Novos</th>
                <th>Atualizados</th>
                <th>Desativados</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6">Sem imports</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

export default Admin

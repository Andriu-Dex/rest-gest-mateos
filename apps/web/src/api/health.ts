export interface ApiHealth {
  status: 'ok'
  database: 'connected'
}

export async function fetchApiHealth(): Promise<ApiHealth> {
  const response = await fetch('/api/health')

  if (!response.ok) {
    throw new Error('API health check failed')
  }

  return response.json() as Promise<ApiHealth>
}

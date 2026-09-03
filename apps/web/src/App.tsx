import { Alert, CircularProgress, Container, Stack, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { fetchApiHealth } from './api/health'
import './App.css'

function App() {
  const healthQuery = useQuery({
    queryKey: ['api-health'],
    queryFn: fetchApiHealth,
    retry: 1,
  })

  return (
    <Container component="main" maxWidth="sm">
      <Stack spacing={3} className="app-content">
        <Typography component="h1" variant="h3">
          RestGest Mateos
        </Typography>

        {healthQuery.isPending && (
          <Stack direction="row" spacing={2} alignItems="center">
            <CircularProgress size={24} />
            <Typography>Comprobando la API...</Typography>
          </Stack>
        )}

        {healthQuery.isSuccess && (
          <Alert severity="success">API disponible</Alert>
        )}

        {healthQuery.isError && (
          <Alert severity="error">API no disponible</Alert>
        )}
      </Stack>
    </Container>
  )
}

export default App

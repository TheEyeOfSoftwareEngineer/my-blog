import { FallbackProps } from 'react-error-boundary'
import NoPermission from '../pages/NoPermission'
import NotFound from '../pages/NotFound'
import ServiceDown from '../pages/ServiceDown'
import Unknown from '../pages/Unknown'

export default function ErrorFallback({
  error,
  resetErrorBoundary
}: FallbackProps) {
  const { cause } = error
  console.log(cause)
  return (
    <>
      {cause === '401' && <NoPermission />}
      {cause === '404' && <NotFound />}
      {cause === '500' && <ServiceDown reset={resetErrorBoundary} />}
      {!cause && <Unknown reset={resetErrorBoundary} />}
    </>
  )
}

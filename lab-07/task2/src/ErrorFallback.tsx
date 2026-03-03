function ErrorFallback() {
  return (
    <div>
      <p>Failed to load the component. Please try again.</p>
      <button onClick={() => window.location.reload()}>
        Reload Page
      </button>
    </div>
  )
}

export default ErrorFallback
import GoogleReviewsWidget from "google-reviews-widget"
import "./App.css"

function App() {
  return (
    <div className="demo-container">
      <header>
        <h1>Google Reviews Widget</h1>
        <p className="subtitle">A simple way to display your Google reviews</p>
      </header>
      <GoogleReviewsWidget instanceId="crEa2DcZaByNvzYSyvuo" />
    </div>
  )
}

export default App

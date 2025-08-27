import './App.css'
import Datepicker from './Datepicker'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Hello World</h1>
        <p className="text-gray-600 mb-6">Welcome to React with Vite and Tailwind CSS!</p>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select a date:
          </label>
          <Datepicker />
        </div>
        
        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
          Click me
        </button>
      </div>
    </div>
  )
}

export default App

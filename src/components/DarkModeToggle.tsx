import { useEffect, useState } from 'react'

export function DarkModeToggle () {
  const [darkMode, setDarkMode] = useState(true) // Dark mode activado por defecto

  useEffect(() => {
    // Este efecto se encarga de añadir o eliminar la clase 'dark' del <html>
    const html = document.querySelector('html')
    if (darkMode) {
      html?.classList.add('dark')
    } else {
      html?.classList.remove('dark')
    }
  }, [darkMode])

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode) // Alternar el modo oscuro
  }

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only"
            onChange={handleToggleDarkMode}
            checked={darkMode}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div
            className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
              darkMode ? 'translate-x-6' : ''
            }`}
          ></div>
        </div>
        <div className="ml-3 text-gray-700 dark:text-white font-medium">Dark Mode</div>
      </label>
    </div>
  )
}

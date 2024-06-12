import React from 'react'

const Year = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="flex flex-row space-x-2 mb-2 mt-2">
      <span className="footer-year">&copy;&nbsp;2023-{currentYear}</span>
      <span className="footer-author">by Dagoberto Martinez</span>
    </div>
  )
}

export default Year

import React from 'react'

function IsLoading() {
  return (
    <div className="flex justify-center items-center min-h-[150px]">
      <div className="h-6 w-6 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
    </div>
  )
}

export default IsLoading

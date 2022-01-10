import React from 'react'

export default function BaseInputNumber({ onChange, value, ...props }) {
  const handleChange = e => {
    const val = e.target.value
    if ((/^\d+$/.test(val) || val === '') && onChange) {
      onChange(val)
    }
  }

  return <input type="text" value={value} onChange={handleChange} {...props} />
}

import React, { useEffect } from 'react'
import { TextInput } from '@sanity/ui'
import { set } from 'sanity'

const generateShortId = () => {
  // Function to generate a short unique ID
  return Math.random().toString(36).substring(2, 11).toUpperCase()
}

const ShortIdInput = ({ value, onChange, type }) => {
  useEffect(() => {
    if (!value) {
      const newId = generateShortId()
      onChange(set(newId))
    }
  }, [value, onChange])

  return <TextInput readOnly value={value || ''} />
}

export default ShortIdInput

import React from 'react'
const symbols = ['C', 'C#', 'D', 'E', 'F', 'G', 'A', 'B']

export default function SymbolIcon({
    className
  }:{
    className?: string
  }) {
    return(
        <div
            className={className}
            style={{
                marginRight: '5px',
                fontSize: '23px',
                fontWeight: 600,
            }}>
        E#
        </div>
    )
}
import React from 'react';

export default function NameIcon({
  className
}:{
  className?: string
}) {
  return (
    <div
        className={className}
        style={{
            marginRight: '5px',
            fontSize: '23px',
            fontWeight: 600,
        }}>
      Mi#
    </div>
  );
}

import React from 'react'

const Footer: React.FC = () => {
  return (
    <div style={{
      width: '100%', backgroundColor: '#ddd', color: '#fff', padding: '10px 0', textAlign: 'center'
    }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://github.com/chris80072'>
          chris80072
        </a>
    </div>
  )
}

export default Footer

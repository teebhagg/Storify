import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className='mt-5' style={{ background:'rgba(139, 168, 142, 0.7)' }}>
      <Container>
        <div className='d-flex justify-content-between gap-4 py-5' >
          <p>T&C</p>
          <p>Privacy Policy</p>
          <p>2023 Copyright, Storify</p>
          <p>Designed and built by Joshua Ansah</p>
        </div>
      </Container>
    </footer>
  )
}

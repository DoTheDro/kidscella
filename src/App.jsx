import { useState } from 'react'
import './App.css'

//Pages
import Navbar from './Pages/Navbar'
import FirstSection from './Pages/FirstSection'
import SecondSection from './Pages/SecondSection'
import ThirdSection from './Pages/ThirdSection'
import FourthSection from './Pages/FourthSection'

function App() {

  const [overview, setOverview] = useState([
    {
      'aim': 'Our tutorial service aims to provide high-quality and personalized education to students of all ages and backgrounds. We strive to empower students with the knowledge and skills they need to succeed academically and beyond. We believe in fostering a love of learning and helping students build confidence in their abilities. Our mission is to make education accessible, engaging, and effective for everyone.',
      'view': true 
    },
    {
      'aim': 'Our vision is to be a leading provider of tutorial services, known for our innovative and effective teaching methods, exceptional tutors, and commitment to student success. We aim to transform the education industry by using technology to personalize learning, provide real-time feedback, and make education more interactive and engaging. Our vision is to empower students to achieve their full potential, regardless of their circumstances, and to create a world where education is a right, not a privilege.',
      'view': false
    }
  ])

  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondSection state={overview} />
      <ThirdSection />
      <FourthSection />
    </div>
  )
}

export default App

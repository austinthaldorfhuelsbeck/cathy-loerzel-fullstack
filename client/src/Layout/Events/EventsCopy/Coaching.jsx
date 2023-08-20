import React from 'react'
import ContactForm from '../../Components/ContactForm'

export default function Coaching() {
  return (
    <>
      <div className="w-container">
        <h2>STORY WORK AND LEADERSHIP COACHING</h2>
        <p>Leading an organization, being a therapist, or running groups is difficult work that needs care and attunement to your own story as you tend to others. Cathy offers 9 coaching sessions to help you do some story work, understand where you are in your formational trajectory and gain clarity and wisdom as to your next steps in your journey toward wholeness.</p>
        <p><em>Coaching sessions: $200 with a sliding scale if needed.</em></p>
      </div>
      <ContactForm type="coaching" />
    </>
  )
}

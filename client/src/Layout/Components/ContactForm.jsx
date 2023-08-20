import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com'
init("user_CvpPf1sJ7rZo6giCrFhIr")

export default function ContactForm({ type }) {
  const [isActive, setIsActive] = useState(false)
  // Title active only on home page
  const history = useHistory()
  useEffect(() => {
    if (history.location.pathname === "/") setIsActive(true)
  }, [history])

  // FORM STATE
  let initialFormState = {
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    audience: "",
    location: "",
  }
  initialFormState = (type) ? {...initialFormState, type: type} : initialFormState
  const [formData, setFormData] = useState({ ...initialFormState })
  const [isThankYou, setIsThankYou] = useState(false)

  // HANDLERS
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(
        "Service: ", process.env.REACT_APP_SERVICE_ID,
        "Template: ", process.env.REACT_APP_TEMPLATE_ID,
        "User: ", process.env.REACT_APP_USER_ID
      )
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      setFormData(initialFormState)
      setIsThankYou(true)
    } catch (err) {
      console.error(err)
    }
  }

  const ThankYou = () => {
    return isThankYou && <h3>Thank you for inquiring!</h3>
  }

  // RENDER
  return (
    <div id="contact-form" className="content-section-alt wf-section">
      <div className="section-bg-flex-center">
        {isActive && (
          <h3 className="lg-title mt-5">Contact</h3>
        )}
        <div className="_25-column"></div>
        <div className="form-block" data-aos="fade-up">
          <div>Reach out today.</div>
          <div className="top-border _20">
            <form
              name="wf-form-Contact-Form"
              className="flex-space"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="text-field-4 w-input"
                maxLength="30"
                name="name"
                placeholder="your name *"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                type="text"
                className="text-field-4 w-input"
                maxLength="256"
                name="company"
                placeholder="your company"
                onChange={handleChange}
                value={formData.company}
              />
              <input
                type="text"
                className="text-field-4 w-input"
                maxLength="30"
                name="phone"
                placeholder="your phone #"
                onChange={handleChange}
                value={formData.phone}
              />
              <input
                type="text"
                className="text-field-4 w-input"
                maxLength="256"
                name="email"
                placeholder="your email *"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <select
                name="type"
                className="text-field-4 w-input"
                onChange={handleChange}
                value={formData.type}
                defaultValue="init"
                required
              >
                <option value="init" disabled>type of event *</option>
                <option value="" disabled>---</option>
                <option value="coaching">Coaching</option>
                <option value="intensives">Intensives</option>
                <option value="conferences">Speaking Engagements</option>
                <option value="other">Other</option>
              </select>
              <textarea
                className="textarea-2 w-input"
                maxLength="5000"
                name="message"
                placeholder="details for cathy *"
                onChange={handleChange}
                value={formData.message}
                required
              ></textarea>
              {(formData.type === "conferences") && <input
                type="number"
                className="text-field-4 w-input"
                maxLength="5"
                name="audience"
                placeholder="audience size"
                onChange={handleChange}
                value={formData.audience}
              />}
              {(formData.type !== "intensives") && <input
                type="text"
                className="text-field-4 w-input"
                maxLength="256"
                name="location"
                placeholder="location"
                onChange={handleChange}
                value={formData.location}
              />}
              <button type="submit" className="submit-button-3 w-button">Let's talk!</button>
            </form>
            <ThankYou />
          </div>
        </div>
      </div>
    </div>
  )
}
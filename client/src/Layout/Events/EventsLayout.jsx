import { useParams } from "react-router-dom"

import Events from "./Events"
import NewsletterForm from "../Components/NewsletterForm"
import ProductBanner from "../Components/ProductBanner"
import EventTypes from "../Components/EventTypes"
import ContactForm from "../Components/ContactForm"
import Coaching from "./EventsCopy/Coaching"
import Intensives from "./EventsCopy/Intensives"
import Retreats from "./EventsCopy/Retreats"

export default function EventsLayout() {
  let { type } = useParams()

  const EventsBanner = () => (
    <>
      <div className="blog-banner">
        <div className="blog-text-box">
          <h1 className="blog-header" data-aos="fade" data-aos-duration="100000">
            {type ? type : "Story Work"}
          </h1>
        </div>
      </div>
      <img
        src="https://storage.googleapis.com/cathy-loerzel-img/Cathy-blogbanner-notext.jpg"
        alt="Cathy Loerzel's Blog"
        className="image"
        style={{ width:"100%" }}
      />
    </>
  )

  const EventsHeader = ({ type }) => {
    if (type === "coaching") return <Coaching />
    if (type === "intensives") return <Intensives />
    if (type === "retreats") return <Retreats />
    if (type === "conferences") return (
      <div className="w-container">
        <h2>CONFERENCES</h2>
        <p>Cathy is available to speak to your community, church, or organization. She teaches on the Orphan, Widow, Stranger content found in Redeeming Heartache in depth.</p>
        <p>She also teaches on trauma, story and healing, spiritual warfare, and her hallmark model called the “U-Diagram” on the trajectory of healing the human heart.</p>
      </div>
    )
    return <></>
  }

  const EventsList = ({ type }) => {
    if (type === "coaching" || type === "intensives") {
      return <></>
    }
    if (type === "retreats" || type === "conferences") {
      return <Events type={type} />
    }
    return <Events />
  }

  return (
    <div>
      <EventsBanner />
      <EventsHeader type={type} />
      <EventsList type={type} />
      <EventTypes />
      <NewsletterForm />
      <ProductBanner />
    </div>
  )
}
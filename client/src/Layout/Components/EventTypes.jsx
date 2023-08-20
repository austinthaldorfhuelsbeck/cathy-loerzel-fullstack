import { Link } from "react-router-dom"

export default function EventTypes() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const header =
    window.location.pathname === "/"
    ? <br />
    : <h1>Event Types</h1>

  const TypeSort = () => (
    <div className="w-container" data-aos="fade-up">
      <div className="flex-center">
        <div className="intro-box" style={{"width": "20%"}}>
          <div className="intro-text-box">
            <Link to="/events/coaching" className="title-link" onClick={scrollToTop}>Coaching</Link>
            <div className="top-border _5">
              <Link to="/events/coaching" className="text-link" onClick={scrollToTop}>Story Work and leadership coaching sessions</Link>
            </div>
          </div>
        </div>
        <div className="intro-box-alt1" style={{"width": "20%"}}>
          <div className="intro-text-box">
            <Link to="/events/intensives" className="title-link" onClick={scrollToTop}>Intensives</Link>
            <div className="top-border _5">
              <Link to="/events/intensives" className="text-link" onClick={scrollToTop}>Go deeper into your own story</Link>
            </div>
          </div>
        </div>
        <div className="intro-box-alt2" style={{"width": "20%"}}>
          <div className="intro-text-box">
            <Link to="/events/retreats" className="title-link" onClick={scrollToTop}>Retreats</Link>
            <div className="top-border _5">
              <Link to="/events/retreats" className="text-link" onClick={scrollToTop}>Embodied spiritual healing</Link>
            </div>
          </div>
        </div>
        <div className="intro-box-alt1" style={{"width": "20%"}}>
          <div className="intro-text-box">
            <Link to="/events/conferences" className="title-link" onClick={scrollToTop}>Conferences</Link>
            <div className="top-border _5">
              <Link to="/events/conferences" className="text-link" onClick={scrollToTop}>Opportunities to hear from Cathy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-container">
      <section id="visual-nav" className="cards=section">
        {header}
        <TypeSort />
      </section>
    </div>
  )
}
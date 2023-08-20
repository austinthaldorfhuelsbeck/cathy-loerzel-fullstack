import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

export default function AccordionItem({ item }) {
  const [isActive, setIsActive] = useState(false)
  // Active on Events page by default
  const history = useHistory()
  useEffect(() => {
    if (history.location.pathname.includes("/events")) setIsActive(true)
  }, [history])

  // format date
  const date = new Date(item.date)
  const dateText = date.toLocaleDateString()

  const flipIsActive = () => setIsActive(!isActive)

  return (
    <div className="">
      <div className="accordion-title" onClick={flipIsActive}>
        <h2>{(item.name.length > 100 ? item.name.slice(0, 100) + "..." : item.name)}</h2>
        <h2 className="mx-4">{dateText}</h2>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <>
          <div className="accordion-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
          <a href={item.url} target="_blank" rel="noreferrer">
            <button className="button w-button">Learn More</button>
          </a>
        </>
      )}
    </div>
  )
}

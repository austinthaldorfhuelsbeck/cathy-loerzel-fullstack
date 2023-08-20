import { Route, Switch } from "react-router-dom"

import NavBar from "./Components/NavBar"

import Home from "./Home/Home"
import About from "./Home/About"
import BlogLayout from "./Blog/BlogLayout"
import Coaching from "./Coaching/Coaching"
import EventsLayout from "./Events/EventsLayout"
import RedeemingHeartache from "./RedeemingHeartache/RedeemingHeartache.jsx"
import Contact from "./Contact/Contact"

import NotFound from "./NotFound/NotFound"
import Footer from "./Footer/Footer"

export default function Layout() {
  return (
    <div className="contain">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog/topic/:topic">
          <BlogLayout />
        </Route>
        <Route path="/blog/:category/:id">
          <BlogLayout />
        </Route>
        <Route path="/blog/:category">
          <BlogLayout />
        </Route>
        <Route path="/blog">
          <BlogLayout />
        </Route>
        <Route path="/coaching">
          <Coaching />
        </Route>
        <Route path="/events/:type">
          <EventsLayout />
        </Route>
        <Route path="/events">
          <EventsLayout />
        </Route>
        <Route path="/redeeming-heartache">
          <RedeemingHeartache />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}
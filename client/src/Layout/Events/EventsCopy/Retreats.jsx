import React from 'react'

export default function Retreats() {
  const headerImgURL = "https://storage.cloud.google.com/cathy-loerzel-img/0070D2C1-9128-41EF-B439-6F6FA96BBB7C_1_105_c.jpeg"
  const inlineIntroImgURL = "https://storage.cloud.google.com/cathy-loerzel-img/A371C13E-DBA0-4E09-9118-95A385023766_1_105_c.jpeg"
  const inlineFallImgURL = "https://storage.cloud.google.com/cathy-loerzel-img/D16573AD-2AFD-4977-B265-3110C842145D_1_105_c.jpeg"
  const inlineWinterImgURL = "https://storage.cloud.google.com/cathy-loerzel-img/7BCF3C1C-1576-4341-A58F-471AC0DDE71D_1_105_c.jpeg"
  const inlineSpringImgURL = "https://storage.cloud.google.com/cathy-loerzel-img/A8B8007E-0277-4AD0-9B16-1470F3478C08_1_105_c.jpeg"

  return (
    <>
      <div className="n-container">
        <h1 class="h1-redeeming-alt">Sacred Interruption</h1>
        <h1 class="mini-title align-center">With Cathy Loerzel, Tracy Johnson, Heather Stringer, and Christy Bauman</h1>
      </div>
      <img
        src={headerImgURL}
        alt="Sacred Interruption"
        className="image-banner"
      />
      <div className="n-container" data-aos="fade">
        <div className="row py-3 align-right">
          <h2><em><strong>Our vision is a different type of retreat than you may have experienced before.</strong></em></h2>
        </div>

        <hr />

        <div className="row-10 py-3">
          <p>We recognize that there is a space within us of wild and deep knowing that we have worked hard to forget. It is time to welcome that knowing and all it has to tell us about who we are, and who God is, back into our bodies.</p>
          <p>We have known the longing for our own bodies to make space for authentic connection, incredible food, and beautiful spaces in which to rest and restore what is empty and weary within us. We have tasted the goodness that comes when we tend those longings.</p>
        </div>

        <div className="row-2 align-center">
          ...
        </div>
        
        <div className="container-left py-3 align-right">
          <div className="container-left__image">
            <img
              src={inlineIntroImgURL}
              alt="Roses and Candles - Holy"
              className="px-2"
              style={{
                width:"60rem",
                opacity:"80%"
              }}
            />
          </div>    
          <div className="container-left__text px-2">
            <br />
            <p>These weekends offer you just that kind of space. We will combine Bodywork, StoryWork and Ritual as you meet yourself anew, remember what has been lost or forgotten, and encounter the wonder and beauty of God within community.</p>
            <br />
            <p>We have created 3 distinct retreats in accordance with the seasons and the church calendar. Our hope is to re-equant our bodies to the natural rhythms of the earth and of God as we experience the elements, exquisite hospitality, ritual, storywork and bodywork.</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="n-container">

        <div data-aos="fade">
          <h1 class="h1-redeeming-alt">Retreats</h1>
          <h1 class="mini-title align-center">Each seasonal retreat offers a different experience and flair</h1>
        </div>

        <div className="py-3" data-aos="fade">
          <div className="container-right">
            <div className="container-right__text px-2">
              <br />
              <br />
              <h1>Fall - Harvest Retreat</h1>
              <br />
              <p>Our fall retreat invites 20 women to the richness of life between summer and winter as we harvest the fruit and prepare for the dark months of winter. We will be in the beauty of the lake country in Knoxville, TN and on the farm with Farm to Feast.</p>
              <br />
              <p>We will take a closer look at what has been brought to life, where death is lurking, what needs to be harvested and what needs to be grieved.</p>
            </div>
            <div className="container-right__image">
              <img
                src={inlineFallImgURL}
                alt="Pie and coffee"
                className="px-4 py-5"
                style={{
                  width:"90rem",
                  opacity:"80%"
                }}
              />
            </div>
          </div>
        </div>

        <hr />
        
        <div className="container-left py-3 align-right" data-aos="fade">
          <div className="container-left__image">
            <img
              src={inlineWinterImgURL}
              alt="Snow falling at winter retreat off porch"
              className="px-2 py-5"
              style={{
                width:"100rem",
                opacity:"80%"
              }}
            />
          </div>    
          <div className="container-left__text px-2">
            <br />
            <h1>Winter - Advent Retreat</h1>
            <br />
            <p>You are invited to interrupt the heavy season of the holidays to radically embrace the fact that you need care too. This advent retreat is an opportunity for you to come together in an intimate setting at a beautiful house on a lake in Minneapolis where we will rest, read our bodies, and reimagine what hope, joy and peace can mean for us as we slow down, feast and receive care.</p>
            <br />
            <p>This retreat will only be 6 women, led by Tracy Johnson, Christy Bauman and Cathy Loerzel. We will be staying in an incredible house together sharing meals, talking, doing some body and story work and creating space for the Spirit to speak to us and for us to listen. It will be an extraordinary time to experience the coming of Emmanuel, God with us.</p>
          </div>
        </div>

        <hr />

        <div className="container-right py-3" data-aos="fade">
          <div className="container-right__text px-2">
            <h1>Spring - Resurrection Retreat</h1>
            <br />
            <p><em>90% of all growth on the earth happens during the spring.</em></p>
            <br />
            <p>It is a wild, unruly and frenetic season. And yet, new life is often the space we understand death, fear, and vulnerability.</p>
            <br />
            <p>Meet us on the beach in the lowlands of South Carolina as we play with the power of the ocean, the lull of the marsh focusing on stories of envy, shame, and how we have come to be at war with our bodies and beauty.</p>
            <p>We will engage our stories, our bodies, and our souls all while communing around the table as we are hosted by the team from our partners, Farm to Feast.</p>
          </div>
          <div className="container-right__image">
            <img
              src={inlineSpringImgURL}
              alt="Cathy and participant at the beach friendly sunglasses"
              className="px-4 py-5"
              style={{
                width:"80rem",
                opacity:"80%"
              }}
            />
          </div>
        </div>

        
        
        <hr />
      
      </div>
    </>
  )
}

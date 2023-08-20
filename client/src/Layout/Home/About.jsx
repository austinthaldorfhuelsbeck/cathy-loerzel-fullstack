import NewsletterForm from "../Components/NewsletterForm"
import ContactForm from "../Components/ContactForm"
import FeaturedBlog from "../Components/FeaturedContent/FeaturedBlog"
import FeaturedContent from "../Components/FeaturedContent/FeaturedContent"

export default function About() {
  const AboutContent = () => (
    <div
      id="about"
      className="about-section w-clearfix wf-section"
    >
      <img
        src="https://cathy-loerzel-img.s3.us-west-2.amazonaws.com/cathy+farm.jpg"
        alt="Cathy Loerzel home farm"
        className="image-4 shadow"
      />
      <p className="about-text">
        Hi! I’m Cathy. I am a self diagnosed 3 on the enneagram, a mother of 6 and 8 year old boys, 
        and a wife to a mountaineer/farmer/therapist. I love dogs and horses and I come alive around water... 
        lakes, oceans, rivers, creeks, swamps - you name it - I love it. My dream is to be able to have a 
        house where I can drink coffee every morning looking at water.
      </p>
      <p className="about-text">
        I received my MACP in Psychology in 2007 from The Seattle School of Theology and founded The Allender Center 
        with Dan Allender in 2010. I’ve spent the last 15 years developing the theory and methodology of a popular 
        new coaching and therapeutic approach called Story Work that moves people through their past stories of heartache 
        to heal and discover healthier ways of being in the world. This past year, Dan and I wrote <strong>
          <a href="/redeeming-heartache">Redeeming Heartache</a></strong> and it was a joy to create.
        <br />
      </p>
      <p className="about-text">
        I believe that if we are honest, we know that none of us have escaped heartache and trauma in this 
        beautifully broken world. The question then is how we heal in order not just to make it through, but truly 
        thrive in the light of all that God would hope for us. Storywork will help you understand how harm and 
        heartache have come into your life and what you have done to protect yourself from it in both brilliant 
        and heartbreaking ways. It will then usher you into the radically hopeful call to remember your name and join 
        God in the redemptive arc of the gospel that is still alive and well and wooing us to be honest, grieve, and 
        repair that which has been shattered and join Jesus in breathing new life into this shattered world, starting with our own hearts.
        <br />
      </p>
      <p className="about-text">
        It is my utter joy and passion to join the spirit in bringing this work to individuals and communities. 
        Aside from doing this work, I am passionate about cooking, decorating, hosting parties and nagging my family 
        about keeping the house clean. I’m also generally astonished by my family’s capacity to wreak havoc on a 
        clean house and I’m bound and determined to raise boys who clean up after themselves.  We are all a work in progress.
      </p>
    </div>
  )

  return (
    <>
      <AboutContent />
      <NewsletterForm />
      <ContactForm />
      <FeaturedBlog />
      <FeaturedContent />
    </>
  )
}

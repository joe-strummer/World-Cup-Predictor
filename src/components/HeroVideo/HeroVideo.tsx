import './HeroVideo.css'

export function HeroVideo() {
  return (
    <section className="hero-video">
      <video src="/World_Cup_Players_To_Watch.mp4" autoPlay loop muted playsInline className="hero-video__video" />
      <div className="hero-video__overlay" />
      <div className="hero-video__content">
        <h1 className="hero-video__heading">Path to Glory</h1>
        <p className="hero-video__subheading">Scroll to play</p>
      </div>
    </section>
  )
}

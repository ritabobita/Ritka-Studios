'use client'
import styles from './VideoHero.module.scss';
import { useEffect } from 'react'

export default function VideoHero() {
  useEffect(() => {
    document.addEventListener('visibilitychange', () => {
      const video = document.querySelector('video')
      if (video) {
        document.hidden ? video.pause() : video.play()
      }
    })
  }, [])

  return (
    <section id={styles.videoHero} className={"relative w-full overflow-hidden"}>
      <img 
        className="absolute inset-0 w-full h-full object-cover"
        src="/images/HeroImagePlaceholder.jpg" 
        alt="Description"
      />
      
      <video className="absolute inset-0 w-full h-full object-cover object-bottom" autoPlay muted loop playsInline preload="auto">
        <source src="/videos/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-4 mx-auto max-w-screen-xl h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl 2xl:text-8xl font-bold tracking-tight">
          Welcome to Ritka Studios
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            Explore our handcrafted pottery
          </p>
        </div>
      </div>
    </section>
  )
}
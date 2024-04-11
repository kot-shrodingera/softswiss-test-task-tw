import styles from './Hero.module.scss'
import { Button } from './ui/Button'

function Hero() {
  return (
    <div
      className={`${styles.hero} flex min-h-[451px] md:min-h-[420px] lg:min-h-[490px]`}
    >
      <div className="container flex items-end justify-center py-[44px] md:items-center md:justify-start">
        <div className="flex flex-col items-center gap-[17px] text-center md:max-w-[411px] md:items-start md:gap-[22px] md:text-left lg:max-w-[693px]">
          <h1 className="text-3.5xl md:text-5xl lg:text-6xl">
            Discover the vast expanses of{' '}
            <span className="text-pink">space</span>
          </h1>
          <div className="text-base font-extrabold md:text-1.5xl lg:text-3xl">
            Where the possibilities are{' '}
            <span className="text-yellow">endless!</span>
          </div>
          <Button>Learn more</Button>
        </div>
      </div>
    </div>
  )
}
export default Hero

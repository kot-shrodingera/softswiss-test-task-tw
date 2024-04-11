import { useState } from 'react'

import { cn } from '@/lib/utils'

import Link from './ui/Link'

function Info() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <div className="flex flex-col gap-[20px] md:gap-[17px]">
      <div className="text-lg md:text-2xl lg:text-3xl">
        Embark on a space journey
      </div>
      <div
        className={cn(
          'text-sm font-bold text-white/60 md:text-base lg:text-xl',
          isCollapsed && 'line-clamp-2',
        )}
      >
        Traveling into space is one of the most exciting and unforgettable
        adventures that can change your life forever. And if you have ever
        dreamed of exploring stars, planets and galaxies, then our company is
        ready to help you realize this dream. We offer a unique experience that
        will allow you to go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be filled with
        incredible impressions, excitement and new discoveries. Our team of
        professionals takes care of your safety and comfort so that you can
        fully enjoy your adventure in space. We offer various options for space
        excursions.
      </div>
      <Link
        onClick={() => {
          setIsCollapsed((value) => !value)
        }}
      >
        {isCollapsed ? 'Read More' : 'Show Less'}
      </Link>
    </div>
  )
}
export default Info

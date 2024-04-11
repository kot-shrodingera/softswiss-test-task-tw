import { cn } from '@/lib/utils'

import styles from './Offers.module.scss'
import { Button } from './ui/Button'

export type OfferType = {
  isWide?: boolean
  title: string
  text: string
}

function Offer({ isWide = false, title, text }: OfferType) {
  return (
    <div
      className={cn(
        `${styles.offer} flex h-[350px] flex-col items-start justify-end gap-[22px] rounded-[10px] p-[28px]`,
        isWide && 'lg:col-span-2',
      )}
    >
      <div className={cn('text-4xl lg:text-4.5xl', isWide && 'lg:text-6.5xl')}>
        {title}
      </div>
      <div className={cn('text-base lg:text-2xl', isWide && 'lg:text-2.5xl')}>
        {text}
      </div>
      <Button variant="outline">Learn more</Button>
    </div>
  )
}
export default Offer

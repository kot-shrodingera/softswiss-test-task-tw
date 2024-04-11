import Offer, { type OfferType } from './Offer'

const data: OfferType[] = [
  {
    title: 'Move the borders of reality!',
    text: 'Go on a space adventure',
    isWide: true,
  },
  {
    title: 'Space is not just stars and planets',
    text: 'it is a majestic journey to ',
  },
  {
    title: 'For those who dream of stars',
    text: 'Our offer: make your dream come true',
  },
  {
    title: 'Fulfill your fantastic dreams',
    text: 'Space has never been so close',
    isWide: true,
  },
]

function Offers() {
  return (
    <div>
      <div className="text-lg md:text-2xl lg:text-3xl">Offers</div>
      <div className="mt-[30px] grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:gap-[40px]">
        {data.map(({ title, text, isWide }) => (
          <Offer key={title} title={title} text={text} isWide={isWide} />
        ))}
      </div>
    </div>
  )
}
export default Offers

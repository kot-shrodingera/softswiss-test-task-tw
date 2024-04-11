import RocketImage from '@/assets/images/rocket.png'

function Footer() {
  return (
    <div className="flex flex-col items-center bg-black pb-[20px] text-lg leading-[1.75rem] text-yellow">
      <img src={RocketImage} />
      Exciting space adventure!
    </div>
  )
}
export default Footer

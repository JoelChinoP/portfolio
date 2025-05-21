export default function BentoItemTypingSpeed() {
  return (
    <div className='relative flex h-full flex-col justify-between px-4 pb-5 pt-4 max-md:gap-4'>
      <div className='flex items-baseline justify-between gap-4 max-xs:flex-col'>
        <div className="flex items-center gap-2">
          <img src="/images/typing-speed.png" alt="Typing Speed" className="w-6 h-6" />
          <span className="text-lg font-semibold">Typing Speed</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-4">
        <p className="text-sm text-gray-500">Your typing speed is 80 WPM</p>
        <p className="text-sm text-gray-500">Accuracy: 95%</p>
      </div>
    </div>
  )
}
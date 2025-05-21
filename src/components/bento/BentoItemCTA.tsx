import ArrowRight from 'lucide-static/icons/arrow-right.svg'

interface Props {
  href: string
  text: string
  className?: string
}

const AnimatedLink = ({ href, text, className = '' }: Props) => {
  return (
    <a
      href={href}
      className={`group flex size-full items-center justify-between rounded-3xl px-6 py-6 ${className}`}
    >
      <p
        className="
          relative font-medium
          after:absolute after:left-0 after:top-1/2 after:w-0 after:content-['']
          after:bg-gradient-to-r after:from-pink-500 after:to-violet-500
          after:mt-3 after:h-0.5 after:transition-all after:duration-400
          group-hover:after:w-full
        "
      >
        {text}
      </p>
      <ArrowRight class="size-6 transition-all duration-300 group-hover:rotate-90" />
    </a>
  )
}

export default AnimatedLink

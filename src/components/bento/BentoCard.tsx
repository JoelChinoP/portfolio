interface Props {
  children: React.ReactNode
  className?: string
}

const BentoCard = ({ children, className = '', ...rest }: Props) => {
  const outerClass = `card group rounded-3xl ${className}`.trim()
  const innerClass = `card-content md:absolute border-[#1f2b3a] max-md:border`

  return (
    <div className={outerClass} {...rest}>
      <div className={innerClass}>
        {children}
      </div>
    </div>
  )
}

export default BentoCard  
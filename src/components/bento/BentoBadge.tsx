
interface CustomClass {
  component?: string
  icon?: string
}

interface Props {
  icon: React.ReactNode
  text?: string
  className?: CustomClass
}

const BentoBadge = ({ icon, text, className }: Props) => {
  const isIconOnly = !text

  const baseClasses =
    'z-10 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0'

  const paddingClasses = isIconOnly ? 'p-2' : 'py-2 pl-3 pr-4'

  const componentClasses = `${baseClasses} ${paddingClasses} ${className?.component || ''}`
  const iconClasses = `size-4 ${className?.icon || ''}`

  return (
    <div className={componentClasses}>
      <span className={iconClasses}>{icon}</span>
      {text && <h3 className='text-sm text-zinc-200'>{text}</h3>}
    </div>
  )
}

export default BentoBadge

import techStacks from "@/data/techStackData";

const BentoItemTechStack: React.FC = () => {
  return (
    <div className='flex h-full flex-col gap-5 px-5 pb-6 pt-4 max-md:gap-8'>
      {/* Badge */}
      <div className='flex w-fit items-center gap-2 rounded-full bg-slate-700/40 px-3 py-1.5 text-xs'>
        <img src="/lucide-static/icons/layers.svg" alt="Stack" className="size-4" />
        <span>Tech stack</span>
      </div>

      {/* Tech Stack Marquee */}
      <div className='flex-grow place-content-center'>
        <div className='relative flex w-full flex-col items-center justify-center overflow-hidden md:shadow-xl'>
          {/* Marquee Component */}
          <div className='group flex overflow-hidden p-2 gap-8'>
            {/* Repetimos el contenido 4 veces para el efecto marquee */}
            {[0, 1, 2, 3].map((repeatIndex) => (
              <div 
                key={repeatIndex}
                className='flex shrink-0 justify-around gap-8 animate-marquee flex-row'
              >
                {techStacks.map((tech) => (
                  <span 
                    key={`${repeatIndex}-${tech.name}`}
                    className='size-12 md:max-lg:size-8 flex items-center justify-center'
                    title={tech.name}
                  >
                    <tech.icon className="w-full h-full" aria-label={tech.name} />
                  </span>
                ))}
              </div>
            ))}
          </div>
          
          {/* Gradientes en los bordes */}
          <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[var(--card-background)]'></div>
          <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[var(--card-background)]'></div>
        </div>
      </div>

      {/* Texto descriptivo */}
      <div className='space-y-2'>
        <p className='text-lg'>Tech stacks I'm familiar with</p>
        <p className='text-sm text-slate-400'>
          Primarily focused on the JavaScript ecosystem, but always eager to
          explore and learn new technologies.
        </p>
      </div>
    </div>
  );
};

// Estilos para la animación de marquee (puedes agregar esto a tu CSS global o usar inline styles)
// Nota: Normalmente esto se pondría en un archivo CSS global
/* 
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - 2rem)); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
}
*/

export default BentoItemTechStack;
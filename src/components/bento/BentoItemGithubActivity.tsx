import GitHubCalendar from 'react-github-calendar';
import Github from "lucide-static/icons/github.svg";
import BentoBadge from './BentoBadge';

export default function GitHubActivity() {
  return (
    <div className='relative flex h-full flex-col justify-between px-4 pb-5 pt-4 max-md:gap-4'>
      <div className='flex items-baseline justify-between gap-4 max-xs:flex-col'>
        <BentoBadge icon={<Github />} text='Github activity' />
      </div>

      <GitHubCalendar
        username="JoelChinoP"
      />
      
    </div>
  );
}
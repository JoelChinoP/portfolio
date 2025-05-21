import React from 'react'
import Bookmarks from 'lucide-static/icons/bookmark.svg'
import Suitcase from 'lucide-static/icons/briefcase.svg'

import BentoBadge from './BentoBadge'

interface Props {
  href: string
}

const BookmarkedCard = ({ href }: Props) => {
  return (
    <a
      href={href}
      className="
        group relative flex h-full flex-col gap-3 overflow-hidden
        rounded-[inherit] px-5 pb-8 pt-4
        max-xs:pb-36 md:max-lg:gap-4
      "
    >
      <div className="space-y-5 max-md:z-40">
        <BentoBadge
          icon={<Suitcase />}
          text="Featured work"
          className={{ component: 'w-fit' }}
        />
        <div className="space-y-3 xs:max-md:w-1/2">
          <p className="text-xl leading-none">Bookmarked</p>
          <p className="text-sm leading-relaxed text-slate-400">
            Effortlessly save and organize your favorite tweets in Notion using a Telegram bot.
          </p>
        </div>
      </div>

      <div
        className="
          absolute top-[164px] self-center
          max-xs:mt-4 max-[360px]:top-[172px]
          xs:max-md:left-[calc(50%+16px)] xs:max-md:top-14 xs:max-md:scale-110
        "
      >
        <div
          className="relative flex flex-col items-center gap-2 text-slate-500"
        >
          <div className="flex items-center gap-2 bg-white/10 p-2 rounded-xl backdrop-blur">
            <Bookmarks class="size-5" />
            <span className="text-xs">Your bookmark has been saved</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-400 text-slate-800 p-2 rounded-xl">
            <Bookmarks class="size-5" />
            <span className="text-xs">Bookmarking this thread</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default BookmarkedCard

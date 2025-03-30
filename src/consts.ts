import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'brucy',
  locale: 'en-US',
  description:
    'astro-erudite is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
  href: 'https://brucyonsol.xyz',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://t.me/brucyonsol',
    label: 'Telegram',
  },
  {
    href: 'https://x.com/brucyonsol',
    label: 'Twitter',
  },
  {
    href: 'https://dexscreener.com/solana/9e56hnzqwx6lwdpcxyyrgelmgtedg8svseub8qpttqpb',
    label: 'Dexscreener',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  Telegram: 'lucide:send',
  Twitter: 'lucide:twitter',
  Dexscreener: 'lucide:chart-no-axes-column-increasing',
}

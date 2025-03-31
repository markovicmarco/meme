export type Site = {
  title: string
  description: string
  href: string
  locale: string
  featuredPostCount: number
  postsPerPage: number
  image: image 
}

export type SocialLink = {
  href: string
  label: string
}

export type IconMap = {
  [key: string]: string
}

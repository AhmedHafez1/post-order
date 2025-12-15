export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    whatsapp: string
    facebook?: string
    instagram?: string
    linkesdin?: string
  }
}

export type Link = {
  buttonType?: 'primary' | 'secondary'
  label: string
  href: string
}

export type Image = {
  url: string
  alternativeText: string
  width: number
  height: number
}

export type Button = {
  buttonType: 'primary' | 'secondary'
  label: string | null
  href: string | null
}

export type Icon = { image: Image; href: string }

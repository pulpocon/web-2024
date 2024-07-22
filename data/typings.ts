export interface Speaker {
  image: string
  name: string
  link?: string
}

export interface Workshop {
  title: string
  speaker: Speaker[]
  description: string[]
  schedule: string
  track: string
  twitter: string[]
}

export interface Organizer {
  name: string
  position: string
  bio: string
  image: URL
  social?: {
    linkedin?: string
    twitter?: string
  }

}

const organizers: Organizer[] = [
  {
    name: 'Ángela Falque',
    position: 'Product & Graphic Designer',
    bio: '',
    image: new URL('../assets/i/organizers/angela-falque.jpeg', import.meta.url),
    social: {
      linkedin: 'https://www.linkedin.com/in/angelafalque-graphicdesigner/'
    }
  },
  {
    name: 'Fran Iglesias',
    position: 'Senior Software Engineer',
    bio: '',
    image: new URL('../assets/i/organizers/fran-iglesias.jpg', import.meta.url),
    social: {
      linkedin: 'https://www.linkedin.com/in/franiglesias/'
    }
  },
  {
    name: 'Lorena Abalde',
    position: 'Frontend Software Engineer',
    bio: '',
    image: new URL('../assets/i/organizers/lorena-abalde.jpg', import.meta.url),
    social: {
      linkedin: 'https://www.linkedin.com/in/lorenaabalde/'
    }
  },
  {
    name: 'Rolando Caldas',
    position: 'Crafter & Agile Software Engineer',
    bio: '',
    image: new URL('../assets/i/organizers/rolando-caldas.jpeg', import.meta.url),
    social: {
      linkedin: 'https://www.linkedin.com/in/rolandocaldas/'
    }
  }
]

export default organizers

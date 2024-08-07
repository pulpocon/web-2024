export interface Sponsor {
  name: string
  logo: string
  link?: string;
}

export enum SponsorType {
  Octopus = 'octopus',
  Diamond = 'diamond',
  Gold = 'gold',
  Bronze = 'bronze',
  Multimedia = 'multimedia'
}

type SponsorGroups = Record<SponsorType, Sponsor[]>

const sponsors: SponsorGroups = {
  [SponsorType.Octopus]: [
    {
      name: 'Elastic',
      logo: '/i/sps/elastic.svg',
      link: 'https://www.elastic.co/es/?utm_origin=pulpocon&utm_medium=web'
    },
  ],
  [SponsorType.Diamond]: [
    {
      name: 'Marine Instruments',
      logo: '/i/sps/marine.png',
      link: 'https://www.marineinstruments.es/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Grafana',
      logo: '/i/sps/grafana.svg',
      link: 'https://grafana.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Codium',
      logo: '/i/sps/codium.png',
      link: 'https://www.codium.team/?utm_origin=pulpocon&utm_medium=web'
    }
  ],
  [SponsorType.Gold]: [
    {
      name: 'Optare Solutions',
      logo: '/i/sps/optare-solutions.png',
      link: 'https://optaresolutions.com/?utm_origin=pulpocon&utm_medium=web'
    },
  ],
  [SponsorType.Bronze]: [
    {
      name: 'Deveez',
      logo: '/i/sps/deveez.svg',
      link: 'https://deveez.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Ultreia',
      logo: '/i/sps/ultreia.png',
      link: 'https://www.ultreia.es/?utm_origin=pulpocon&utm_medium=web'
    },
  ],
  [SponsorType.Multimedia]: [
    {
      name: 'Teltek',
      logo: '/i/sps/teltek.png',
      link: 'https://teltek.es//?utm_origin=pulpocon&utm_medium=web'
    }
  ]
}

export default sponsors

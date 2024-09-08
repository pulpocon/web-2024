export interface Sponsor {
  name: string
  logo: string
  link?: string;
}

export enum SponsorType {
  Octopus = 'octopus',
  Diamond = 'diamond',
  Gold = 'gold',
  Silver = 'silver',
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
    {
      name: 'Elastic',
      logo: '/i/sps/edpuzzle.svg',
      link: 'https://edpuzzle.com/?utm_origin=pulpocon&utm_medium=web'
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
  [SponsorType.Silver]: [
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
    {
      name: 'Vitae',
      logo: '/i/sps/vitae.png',
      link: 'https://www.vitaedigital.com'
    },
    {
      name: 'SeQura',
      logo: '/i/sps/SeQura.svg',
      link: 'https://www.sequra.com/es?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Qualifyze',
      logo: '/i/sps/qualifyzeLogo.png',
      link: 'https://www.ultreia.es/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Sngular',
      logo: '/i/sps/sngular.svg',
      link: 'https://www.sngular.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Mercadona Tech',
      logo: '/i/sps/mercadona-tech.svg',
      link: 'https://www.mercadonatech.com/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'Adevinta',
      logo: '/i/sps/adevinta.svg',
      link: 'https://adevinta.com/es/?utm_origin=pulpocon&utm_medium=web'
    },
    {
      name: 'SCRM Lidl International Hub',
      logo: '/i/sps/scrm.png',
      link: 'https://scrm.lidl/?utm_origin=pulpocon&utm_medium=web'
    },
  ],
  [SponsorType.Multimedia]: [
    {
      name: 'Teltek',
      logo: '/i/sps/teltek.png',
      link: 'https://teltek.es/?utm_origin=pulpocon&utm_medium=web'
    }
  ]
}

export default sponsors

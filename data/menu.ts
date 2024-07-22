export interface MenuItem {
  link: string
  title: string
}

const menu: MenuItem[] = [
  {
    'link': '/#home',
    'title': 'Home'
  },
  {
     'link': '/program',
     'title': 'Programa'
  },
  {
    'link': '/organization',
    'title': 'Organización'
  },
  //{
  //  link: 'https://bit.ly/pulpoCon24C4P',
  //  title: 'Call4Papers'
  //},
  // {
  //   'link': '/patrocina',
  //   'title': 'Patrocina'
  // },
  {
    'link': '/codigo-de-conducta',
    'title': 'Código de conducta'
  },
  {
    'link': '/diversity',
    'title': 'Diversidad'
  },
  {
    'link': '/ediciones-anteriores',
    'title': 'Otras ediciones'
  }
]

export default menu

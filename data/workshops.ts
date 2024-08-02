import type { Workshop } from '~/data/typings'

import legacyProjects from '~/data/workshops/legacy-projects';
import openMic from '~/data/workshops/open-mic'
import salvaCorts from '~/data/workshops/salva-corts';
import azaharaManuel from '~/data/workshops/azahara-manuel';
import dorraBartaguiz from '~/data/workshops/dorraBartaguiz';
import antonioOjea from '~/data/workshops/antonio-ojea';
import anaCarmona from '~/data/workshops/ana-carmona';
import lorenaMartinez from '~/data/workshops/lorena-martinez';
import annegretJunker from '~/data/workshops/annegret-junker';
import almudenaVivanco from '~/data/workshops/almudena-vivanco';
import mariaLarios from '~/data/workshops/maria-larios';
import joanLeon from '~/data/workshops/joan-leon';

export default {
  'legacy-projects': legacyProjects,
  'open-mic': openMic,
  'salva-corts': salvaCorts,
  'azahara-manuel':azaharaManuel,
  'dorra-bartaguiz': dorraBartaguiz,
  'antonio-ojea': antonioOjea,
  'ana-carmona': anaCarmona,
  'lorena-martinez': lorenaMartinez,
  'annegret-junker': annegretJunker,
  'almudena-vivanco': almudenaVivanco,
  'maria-larios': mariaLarios,
  'joan-leon': joanLeon,
} as Record<string, Workshop>

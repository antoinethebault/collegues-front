import {Collegue} from '../models/Collegue';

export class Collegues{
    public static collegues:Collegue[]=[new Collegue('M01', 'Renard', 'Martin', 'martin.renard@societe.com', new Date('2000-01-01'), 'https://zupimages.net/up/20/17/2d4s.png'),
        new Collegue('M02', 'Renard', 'Rene', 'rene.durand@societe.com', new Date('2000-01-01'), 'https://zupimages.net/up/20/17/2d4s.png'),
        new Collegue('M03', 'Duchene', 'Ralph', 'ralph.duchene@societe.com', new Date('2000-01-01'), 'https://zupimages.net/up/20/17/2d4s.png')];
}

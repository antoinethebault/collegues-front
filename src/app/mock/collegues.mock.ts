import {Collegue} from '../models/Collegue';

export class Collegues{
    public static collegue1 = new Collegue('M01', 'Renard', 'Martin', 'martin.renard@societe.com', new Date('2000-01-01'), 'img/photo.jpg');
    public static collegue2 = new Collegue('M02', 'Durand', 'Rene', 'rene.durand@societe.com', new Date('2000-01-01'), 'img/photo.jpg');
    public static collegue3 = new Collegue('M03', 'Duchene', 'Ralph', 'ralph.duchene@societe.com', new Date('2000-01-01'), 'img/photo.jpg');
}
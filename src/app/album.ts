import { track } from './track';

export interface Album {

name: string;
releaseDate: string;
coverImage: string;
track: track[];

}
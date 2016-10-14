import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = {
            theHeroes: [
  { id: 11, name: 'Mr. Nasty' },
  { id: 12, name: 'Flash' },
  { id: 13, name: 'The Tick' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }],
   theOtherHeroes: [
  { id: 11, name: 'Mr. Nasty' },
  { id: 12, name: 'Flash2' },
  { id: 13, name: 'The Tickler' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }],
  
};

return {heroes};
    }
}



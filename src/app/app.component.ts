import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CADASTRE-SE';

  constructor() {}

  /*
   * Refatorar: Nas próximas iterações, transferir o
   * vetor para uma classe a parte.
   */
  employees = [
    {
      id: 1,
      name: 'Carlos',
      lastname: 'Moura',
      share: 5
    },
    {
      id: 2,
      name: 'Fernanda',
      lastname: 'Oliveira',
      share: 15
    },
    {
      id: 3,
      name: 'Hugo',
      lastname: 'Silva',
      share: 20
    },
    {
      id: 4,
      name: 'Eliza',
      lastname: 'Souza',
      share: 20
    },
    {
      id: 5,
      name: 'Anderson',
      lastname: 'Santos',
      share: 40
    }
  ];
}

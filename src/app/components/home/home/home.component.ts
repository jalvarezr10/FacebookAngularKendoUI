import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  //TreeView
  public data: any[] = [
    {
      text: 'Noticias', items: [
        { text: 'Historias Destacadas' },
        { text: 'Más Recientes' }
      ]
    },
    {
      text: 'Explorar', items: [
        { text: 'Eventos' },
        { text: 'Grupos' },
        { text: 'Páginas' },
        { text: 'Lista de Amigos' },
        { text: 'Juegos' },
        { text: 'En Vivo' }
      ]
    }
  ];


  //Panel Bar
  private baseImageUrl: string = "https://demos.telerik.com/kendo-ui/content/web/panelbar/";

  private imageUrl(imageName: string): string {
    return this.baseImageUrl + imageName + ".jpg";
  }

  constructor() { }

  ngOnInit() {
  
  }

}

import { Component } from '@angular/core';
import { OpenDatasetSelectorService } from './services/open-dataset-selector/open-dataset-selector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Project_demo';

  constructor(public openDatasetSelectorService: OpenDatasetSelectorService) {}
  }
  isDatasetOpen:boolean=false;

  openData():void{
    this.isDatasetOpen=true;
  }
}
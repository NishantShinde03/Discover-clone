import { Component } from '@angular/core';
import { ShimmerEffectService } from '../services/shimmer-effect/shimmer-effect.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent {
  showBottomBar: boolean=false;
  showRunButton: boolean=false;
constructor(
  public shimmerService: ShimmerEffectService) { }

  cancelButton() {
    this.showBottomBar = false; 
    this.showRunButton = true; 
    
  }

}

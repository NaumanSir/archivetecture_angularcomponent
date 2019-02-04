import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Archivetecture';
  archs = [];
  arch = {};
  private _archService: HttpService;

  constructor(_archService: HttpService) {
    this._archService = _archService;
  }

  ngOnInit() {
    let observable = this._archService.getAll();
    observable.subscribe (data => {
      this.archs = data['archs']
    });
  }

  newArch() {
    let observable = this._archService.create(this.arch);
    observable.subscribe (data => {
      console.log(data);
      this.arch = {};
      this.ngOnInit();
    });
  }

}

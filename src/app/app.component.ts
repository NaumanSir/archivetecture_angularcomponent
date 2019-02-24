import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Archivetecture';
  Archs = [];
  arch = {};
  private _archService: HttpService;

  constructor(_archService: HttpService) {
    this._archService = _archService;
  }

  ngOnInit() {
    let observable = this._archService.getAll();
    observable.subscribe (data => {
      this.Archs = data['Archs']
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

  imageAdded(e) {
    console.log("image added", e);
    let _this = this;
    let file = e.target.files[0];
    let reader= new FileReader();
    reader.addEventListener("load", function() {
      _this.arch['filename'] = file.name;
      _this.arch['image'] = reader.result;
      console.log(_this.arch);
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }

}

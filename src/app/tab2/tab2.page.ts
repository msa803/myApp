import { Component } from '@angular/core';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx'


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private inBrowser: InAppBrowser) {

}

opentab1(){
  this.inBrowser.create("https://www.google.com",'_self');
}

}
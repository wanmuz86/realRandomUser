import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDetailPage } from '../user-detail/user-detail'
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
/**
 * Generated class for the UserListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {

userList = [
]
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private http: Http) {
  this.http.get("https://api.randomuser.me/?results=10")
  .map(res => res.json())
  .subscribe(
    data => {
      console.log(data)
      this.userList = data.results;
    },
    err => {
      console.log(err);
    },
    ()=>{
      console.log('everything is done!!!')
    }
    );
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }
  itemTapped(user){
  	this.navCtrl.push(UserDetailPage, {user:user})
  }

}

import {Component} from "@angular/core";
import { AlertController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NavParams} from "ionic-angular";

@Component({
  templateUrl: 'createService.html'
})
export class CreateService {
  dimensiones:any;
  currentDimension:number;
  formCreateService:FormGroup;
  submitAttempt:boolean;
  user:any;
  locations:any;

  constructor(private formBuilder:FormBuilder, private navParams:NavParams, private alertCtrl: AlertController){
    this.submitAttempt = false;
    this.dimensiones = ['light', 'primary', 'light'];
    this.currentDimension = 1;
    this.formCreateService = formBuilder.group({
      toName: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      toIdType: ['CC', Validators.compose([Validators.required, Validators.maxLength(2)])],
      toId: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]+$")])],
      toNumTel: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]+$"), Validators.maxLength(10)])],
      contentDeclaration: ['', Validators.compose([Validators.required, Validators.maxLength(120)])],
      valueDeclaration: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]+$")])],
      dimension: [this.currentDimension, Validators.compose([Validators.required, Validators.pattern("^[0-9]$")])]
    });
    this.user = this.navParams.get('user');
    this.locations = this.navParams.get('locations');
  }

  selectDimension(id:number){
    this.dimensiones[id] = 'primary';
    this.dimensiones[this.currentDimension] = 'light';
    this.currentDimension = id;
    this.formCreateService.value.dimension = id;
  }

  createService(){
    this.submitAttempt=true;
    if(!this.formCreateService.valid){
      this.presentAlert();
    }
    else {
      alert("Creating service!");
      this.formCreateService.value.user = this.user;
      this.formCreateService.value.locations = this.locations;
      console.log(this.formCreateService.value);
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Datos incorrectos!',
      subTitle: 'Por favor, revise los datos, y busque nuevamente.',
      buttons: ['OK']
    });
    alert.present();
  }

}

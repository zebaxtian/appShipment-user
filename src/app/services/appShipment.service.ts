import { Injectable } from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/RX';

@Injectable()
export class AppShipmentService {

  private url:String = "http://192.168.0.4:9000";
  //private url:String = "http://54.157.227.139:9000";

  constructor (private http:Http){}

  login(data){
    let headers = new Headers({ 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions ({ headers: headers });
    return this.http.post(this.url+"/login", data, options).map(
      (response:Response) => {
        const data = response.json();
        return data;
      },
      (error) => {
        const data = error.json();
        return data;
      }
    );
  }

  getTransporters(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions ({ headers: headers });
    return this.http.post(this.url+"/transportadores/location", data, options).map(
      (response:Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  getTransporterById(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions ({ headers: headers });
    return this.http.post(this.url+"/transportadores/getById", data, options).map(
      (response:Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  createService(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions ({ headers: headers });
    return this.http.post(this.url+"/services/create", data, options).map(
      (response:Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  getActiveService(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions ({ headers: headers });
    return this.http.post(this.url+"/services/activeService/user", data, options).map(
      (response:Response) => {
        const data = response.json();
        return data;
      }
    );
  }

  getServiceById(data){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions ({ headers: headers });
    return this.http.post(this.url+"/services/servicebyId", data, options).map(
      (response:Response) => {
        const data = response.json();
        return data;
      }
    );
  }

}

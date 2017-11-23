import { Injectable } from '@angular/core';
import { Http ,RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class Handler {

 
  constructor(private http: Http) {
  
  }


    Post(URL, Parameter) {
        
        var Token = localStorage.getItem('Token');
        //console.log( 'Token=>' + Token);
        var headers = new Headers({'Authorization':Token});
        var Option = new RequestOptions({headers:headers});
        return this.http.post(URL, Parameter, Option).map(data => {
            return data.json();
        }, error => {
            console.log('WebserviceHandler=>'+error);
            return error;
        });
        
    }

    PostWithoutToken(URL, Parameter) {
        console.log(URL);
        return this.http.post(URL, Parameter).map(data => {
            return data.json();
        }, error => {
            console.log('WebserviceHandler=>'+error);
            return error;
        });
        
    }

 
    Get(URL){
        
        var Token = localStorage.getItem('Token');
        //console.log( 'Token=>' + Token);
        var headers = new Headers({'Authorization':Token});
        var Option = new RequestOptions({headers:headers});
        
        return this.http.get(URL,Option).map(data => {
            return data;
        }, error => {
            console.log('WebserviceHandler=>'+error);
            return error;
        });

    }

    GetWithoutToken(URL){
        
        return this.http.get(URL).map(data => {
            return data;
        }, error => {
            console.log('WebserviceHandler=>'+error);
            return error;
        });

    }

  
}


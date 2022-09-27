import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';



const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  

 // private _storage: Storage | null = null;

token:string = null;

  constructor(private htpp: HttpClient,
    private storage: Storage,
    private _storage:Storage
    ) {    this._storage.create();}

    async ngOnInit() {
      await this.storage.create();
  }

    login(email: string, password: string){

      const data ={email, password};

      return new Promise(resolve =>{

        this.htpp.post(`${URL}/user/login`, data)
        .subscribe(resp =>{
      
          console.log(resp);
      
          if(resp['ok']){
            this.guardarToken(resp['token']);
            resolve (true);
          }else{
      
            this.token= null;
            this.storage.clear();
            resolve (false);
          }
      
        });

      });

    }

    registro(Usuario: Usuario){

      return new Promise(resolve=>{

        this.htpp.post(`${ URL}/user/create`, Usuario)
        .subscribe(resp =>{
          console.log(resp);

          if(resp['ok']){
            this.guardarToken(resp['token']);
            resolve (true);
          }else{
      
            this.token= null;
            this.storage.clear();
            resolve (false);
          }
      
        });


      });

    }



 async guardarToken(token : string){
  this.token=token;
  await this.storage.set('token', token);

}    


}

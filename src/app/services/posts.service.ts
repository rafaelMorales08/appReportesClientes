import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaPosts } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

paginaPosts =0;

  constructor(private htpp: HttpClient) { }


  getPosts (pull:boolean=false){

    if (pull){
      this.paginaPosts =0;
    }


    this.paginaPosts ++;
   return this.htpp.get<RespuestaPosts>(`${URL}/posts/?pagina=${this.paginaPosts}`);
  }

}

/**
 * Created by jindong on 2017/7/31.
 */

import {Server} from "ws";
import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class SocketService {


  ws: WebSocket;

  constructor(){}

  createObservableSocket(url: string):Observable<any>{
    this.ws = new WebSocket(url);
    return new Observable(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
      });
  }
}

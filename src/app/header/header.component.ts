import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  messageCount = 0;

  title = environment.appTitle;

  constructor(public socketService: SocketService) { }

  ngOnInit() {
    this.socketService.createObservableSocket("ws://localhost:8085").pipe(
      map(event => JSON.parse(event))
    )
    .subscribe(
      
      event => this.messageCount = event.messageCount
    )
  }

}

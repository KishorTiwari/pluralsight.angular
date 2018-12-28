import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../../service/message.service';
import { Message } from '../../models/message';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messages: Message[];
constructor(
  private route: ActivatedRoute,
  private messageService: MessageService
) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      const propertyId = params['id'];
      console.log(propertyId);
      this.messageService.getMessageByPropertyId(propertyId).subscribe(
        (resp: HttpResponse<Message[]>)=>{
        this.messages = resp.body;
      });
    });
  }
}

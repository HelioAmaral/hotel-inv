import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomList } from '../rooms';



@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {
//the input allows us to bring the RoomList interface, we give it an empty array, it will then be completed with the roomList when used in the rooms component
  @Input() rooms: RoomList[] = [];

  //Outputs are an event, we need to import EventEmitter to use it
  //here we are saying select this room, and this info will be passed to the parent component
  @Output() selectedRoom = new EventEmitter<RoomList>();


  //method called when select button is pressed
  //when the room is selected we want to emit this data back to parent
  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }


}

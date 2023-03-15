import { Component } from '@angular/core';
//interface Room is imported
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName = 'Hilton';
  numRooms = 20;
  hideRooms = true;

  //property of type Room(interface)
  rooms:Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  //property oomList of type RoomList(interface)
  roomList: RoomList[] = [
    {
      roomNumber: 202,
    roomType: 'Deluxe',
    amenities: 'AC, Smart TV, Free WiFi',
    price: 500,
    photos: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date('15-Nov-2023')
  },
    {
      roomNumber: 305,
    roomType: 'Premium',
    amenities: 'AC, Smart TV, Free WiFi',
    price: 700,
    photos: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    checkinTime: new Date('12-Nov-2023'),
    checkoutTime: new Date('22-Nov-2023')
  },
    {
      roomNumber: 307,
    roomType: 'Royal',
    amenities: 'AC, Smart TV, Free WiFi',
    price: 1000,
    photos: 'https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    checkinTime: new Date('14-Nov-2023'),
    checkoutTime: new Date('20-Nov-2023')
  },
]
 
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}

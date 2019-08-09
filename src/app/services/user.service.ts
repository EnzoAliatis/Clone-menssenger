import { Injectable } from "@angular/core";
import { User } from "../interfaces/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  friends: User[];

  constructor() {
    let user1: User = {
      nick: "Enzo",
      subnick: "El que chinga",
      age: 24,
      email: "enzo@23.com",
      friend: true,
      uuid: 1
    };
    let user2: User = {
      nick: "Ettore",
      subnick: "El que chinga",
      age: 24,
      email: "enzo@23.com",
      friend: true,
      uuid: 2
    };
    let user3: User = {
      nick: "Paolo",
      subnick: "El que chinga",
      age: 24,
      email: "enzo@23.com",
      friend: false,
      uuid: 3
    };
    this.friends = [user1, user2, user3];
  }
  getFriends() {
    return this.friends;
  }
  getAFriend(uuid) {
    return this.friends.find(item => item.uuid == uuid);
  }
}

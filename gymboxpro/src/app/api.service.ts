import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private firestore: AngularFirestore) {}

  getAllClasses(email: string, password: string) {
    // return this.http.get(`http://localhost:3002/api/table/?email=${email}&password=${password}`);
    return this.firestore.collection('classes').valueChanges();
  }
}

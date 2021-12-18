import { Component } from '@angular/core';
import { firestore } from '../firebase';
import { doc, getDoc } from "firebase/firestore";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bem vindo ao Restaurante do Casimiro!';
  subtitle = 'Por favor, escolha uma opção, ou edite o cardápio!'

  async firebase_test(){
    try {
      const docRef = await getDoc(doc(firestore, 'users'))
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log(firestore)
  }
}

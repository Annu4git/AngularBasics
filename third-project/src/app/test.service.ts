import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  print123(str: string) {
    console.log("print method of Test service : " + str);
  }
}

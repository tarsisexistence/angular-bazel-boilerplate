import { Component } from '@angular/core';
import { msg } from '../../shared/lib/file';

@Component({
  selector: 'hello-world',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  name: string = msg;
}

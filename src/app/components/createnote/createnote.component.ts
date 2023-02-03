import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notesservices/notes.service';


@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  description: any;
  title: any;
  notetoggle: boolean = false;
  data: any;

  constructor(private router: Router, private noteservice: NotesService) {

  }
  noteClick() {

    this.notetoggle = true;
    this.router.navigate(['home/notes'])

  }
  ngOnInit() {
  }
  closebutton() {
    this.notetoggle = false;

    let data = {
      'title': this.title,
      'description': this.description
    }
    return this.noteservice.createnote(data).subscribe((response: any) => {
      console.log("note created", response)

    })
  }



}

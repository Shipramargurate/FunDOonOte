import { Component, Input, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  notelist: any = [];
  noteId: any;
  constructor(private noteservice: NotesService) {

  }
  ngOnInit(): void {
  }

  deletenote() {
    console.log("note deleted");
    console.log(this.noteId);
    let payload = {
      noteIdList: [this.noteCard.id],
      isDeleted: true,
    }
    console.log(payload);
    return this.noteservice.deletenote(payload).subscribe((response: any) => {
      console.log("note deleted", response)
    })
  }
  archivenote(){
    console.log("note archived");
    console.log(this.noteId);
    let payload = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    console.log(payload);
    return this.noteservice.archivenote(payload).subscribe((response: any) => {
      console.log("note archived", response)
    })
    
  }
}

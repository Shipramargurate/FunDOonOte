import { Component, Input, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { NotesService } from 'src/app/services/notesservices/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard: any;
  isDelete = false;
  isDeleted: any;
  notelist: any = [];
  noteId: any;
  constructor(private noteservice: NotesService) {

  }
  ngOnInit(): void {
    // this.isDelete = this.noteCard.isDeleted;
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
}


  // deletenote() {
  //   let payload = {
  //     noteIdList: [this.noteCard.id],
  //     isDeleted: true,
  //   }
  //   return this.noteservice.deletenote(payload).subscribe((response: any) => {
  //     console.log("note deleted", response)
  //   })
  //}
  // }


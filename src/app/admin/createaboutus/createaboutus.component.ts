import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AboutUsService } from 'src/app/service/about-us.service';

@Component({
  selector: 'app-createaboutus',
  templateUrl: './createaboutus.component.html',
  styleUrls: ['./createaboutus.component.css']
})
export class CreateaboutusComponent implements OnInit {
  selectedFile: any;
  P_picture: any;
  constructor(private abouts : AboutUsService,public http:HttpClient) { }

  ngOnInit(): void {
  }
  createForm : FormGroup = new FormGroup({

    aboutustext : new FormControl('',Validators.required),
    aboutusphone: new FormControl('',Validators.required),
    aboutusemail :new FormControl('',[Validators.required,Validators.email]),
    aboutusadders :new FormControl('',Validators.required),
    background :new FormControl('',Validators.required),
 })


   save(){
     debugger
       this.abouts.createaboutus(this.createForm.value);
   }

   uploadimg(file:any){
     debugger
      if(file.length === 0)
      return ;
      const uploadfile = <File>file[0];
      const formData = new FormData();
      formData.append('file',uploadfile,uploadfile.name);
      this.abouts.uploadAttachment(formData);
   }
//   onFileSelected(event: any) {
//     debugger
//     this.selectedFile = <File>event.target.files[0];
//     const fd = new FormData();
//     fd.append('image', this.selectedFile, this.selectedFile.name);

//     //this.background = this.selectedFile.name;
// debugger
//     this.http.post('https://localhost:44363/api/Managepage/UploadImage', fd).subscribe(res => {
//       // console.log(res);
//     });
//   }

}

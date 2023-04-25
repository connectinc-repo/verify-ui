import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { OnBoardBasicDetails, OnBoardCurrentAddress, OnBoardPermanentAddress } from 'src/app/models/onboard/onboard.model';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'onboard-emp',
  templateUrl: './onboard-emp.component.html',
  styleUrls: ['./onboard-emp.component.css']
})
export class OnboardEmpComponent implements OnInit {

  onBoard = new OnBoardBasicDetails()
  PerAddress = new OnBoardPermanentAddress()
  CurAddress = new OnBoardCurrentAddress()

  profileImage: any;
  imageSrc: any;

  constructor(private employeeService:EmployeeService, private notifier:NotifierService) { }

  ngOnInit(){
    
  }

  uploadProfileImage(event: any) {
    this.profileImage = event.target.files[0]
    console.log(this.profileImage)
    if (event.target.files[0]) {
      let imgReader = new FileReader();
      imgReader.onload = (e) => {
        this.imageSrc = imgReader.result
      }; imgReader.readAsDataURL(event.target.files[0])
    }
  }

  removePhoto(){
    this.imageSrc = ''
  }


  onBoardEmployee(){
    let formValue:any = Object.assign({}, ...[this.onBoard, this.PerAddress, this.CurAddress])
    this.employeeService.onBoardEmployee(formValue).subscribe(resposne => {
      if (resposne.success){
        this.notifier.notify('success','Employee details added')
      } else {
        this.notifier.notify('danger','Something went wrong')
      }
    }, err => console.log(err))
  }

}

export class OnBoardBasicDetails {
    full_name:string = '';
    email:string='';
    fathers_name:string='';
    mothers_name:string = '';
    country:string = '0';
    dob:string='';
    phone:string='';
    gender:string='0';
    marital_status:string='0';
    maiden_name:string='';
}

export class OnBoardPermanentAddress{
    per_contact_name: string = '';
    per_address:string='';
    per_country:string='0';
    per_state:string='';
    per_city:string='';
    per_pincode:string='';
}


export class OnBoardCurrentAddress{
    cur_contact_name :string = '';
    cur_address:string='';
    cur_country:string='0';
    cur_state:string='';
    cur_city:string='';
    cur_pincode:string='';
}
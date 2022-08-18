import { LightningElement } from 'lwc';

export default class JSON_Looping extends LightningElement {
    rollNumber =[25,52,69,28,31,88,77];
    
    StudentDetail=
    {
        'name':'Manish Kaushal',
        'age':28,
        'College':'Graphic Era University',
        'Address':'Kundanhalli',
        'City':'Bangalore'
    }
    
    CollegeDetail = [
        {
            
            name : 'Graphic Era University',
            Place : 'Dehradun',
            Course : 'B.Tech',
            Branch : 'Computer Science',
            pincode : 207711
        },
        {
            name : 'DDN University',
            Place : 'Delhi',
            Course : 'BBA',
            Branch : 'Finance',
            pincode : 558877
        },
        {
            name : 'Sai Ram University',
            Place : 'Bangalore',
            Course : 'MBA',
            Branch : 'Marketing',
            pincode : 208017
        }   
    ]  
}
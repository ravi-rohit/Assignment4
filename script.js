var arr=new Array();
arr[0]="Yaakov";
arr[1]="John";
arr[2]="Jen";
arr[3]="jason";
arr[4]="paul";
arr[5]="frank";
arr[6]="larry";
arr[7]="paula";
arr[8]="laura";
arr[9]="jim";
for(var i=0;i<arr.length;i++)
{
    if(arr[i].charAt(0)==='J' || arr[i].charAt(0)==='j')
    {
        console.log("Goodbye "+ arr[i]);
    }
    else{
		console.log("Hello "+ arr[i]);
	}
}
  
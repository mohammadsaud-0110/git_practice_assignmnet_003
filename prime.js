let num=12;
let count = 0;
for(let i=0;i<num;i++){
	if(num%2 == 0){
		count++;
	}
}
if(count == 2){
	console.log("Prime");
}
else{
	console.log("Not Prime");
}
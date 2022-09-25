let num=12;
let factors = 0;
for(let i=0;i<num;i++){
	if(i%num == 0){
		factors++;
	}
}
if(factors == 2){
	console.log(num,"is a Prime number.");
}
else{
	console.log(num,"is not a Prime number.");
}
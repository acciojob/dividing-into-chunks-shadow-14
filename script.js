const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
let x =[];
	let sum =0;
	let ans =[];
	for(let i = 0;i<arr.length;i++){
		if(sum+arr[i]<=n){x.push(arr[i]);sum+=arr[i];}
		else{
			sum=0;
			ans.push(x);
			x=[];
			i--;
		}
	}
	ans.push(x);
	return ans;
	
};

 const n = prompt("Enter n: ");
 alert(JSON.stringify(divide(arr, n)));

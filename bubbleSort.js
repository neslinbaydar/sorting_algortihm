var arr=[2,4,7,3,8,2,9];
var myFunc=function bubbleSort(arr){
var temp;
var i,j=0;
for(i=0;i<arr.length;i++){
 for(j=0;j<arr.length-1;j++){
   if(arr[j]>arr[j+1]){
     temp = arr[j];
     arr[j] = arr[j+1];
     arr[j+1] = temp;
   }
 }
}
return arr;
}
console.log(myFunc(arr));        //////[2, 2, 3, 4, 7, 8, 9]
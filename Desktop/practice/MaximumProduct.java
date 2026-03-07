class Result{
public int MaxProduct(int a[]){
int maxprod=a[0];
int minprod=a[0];
int res=a[0];
for(int i=1;i<a.length;i++){
    int curr=a[i];
    if(curr<0){
        int temp=maxprod;
        maxprod=minprod;
        minprod=temp;

    }

    maxprod=Math.max(curr,maxprod*curr);
    minprod=Math.min(curr,minprod*curr);

     res=Math.max(res,maxprod);


}
return res;
}
}
class MaximumProduct{
public static void main(String args[]){
    int a[]={1,2,0,-4,-3,-5};
    Result obj=new Result();
    int ans=obj.MaxProduct(a);
    System.out.println(ans);
}
}
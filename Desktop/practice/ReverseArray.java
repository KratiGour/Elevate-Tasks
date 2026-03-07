class ReverseArray{
    public static void main(String args[]){
        int a[]={2,4,-1,4,3,7,5};
        int start=0;
        int end=a.length-1;
        int temp;
        while(start<end){
            temp=a[start];
           a[start]=a[end];
            a[end]=temp;
            start++;
            end--;
        }
        for(int i=0;i<a.length;i++){
 System.out.print(a[i]+" ");
        }
       
        
    }
}
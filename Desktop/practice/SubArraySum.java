



class SubArraySum{
    public static void SubArray(int a[]){
        int count=0;
        int maxSum=a[0];
        int minSum=a[0];
        
for(int i=0;i<a.length;i++){
            int start=i;
        
        for(int j=i;j<a.length;j++){
            int end=j;
        System.out.print("[");
         int sum=0;

        for(int k=start;k<=end;k++){
            sum+=a[k];
            System.out.print(a[k]);
            if (k != j) System.out.print(","); 
             
        }
         if(sum>maxSum){
            maxSum=sum;
        }
          count++;
        System.out.println("]");
       
          // minSum=sum;
        if(sum<minSum){
            minSum=sum;
        }
        System.out.println(sum);
       
        }
       
       
        // System.out.println("]");
     
    }
     
System.out.println("Total SubArray = "+count);
   System.out.println("MaxSum ="+ maxSum);
        System.out.println("MinSum ="+ minSum);
    }
    public static void main(String args[]){
        int a[]={2,4,6,8,10};
        SubArray(a);
        
        

    }
}
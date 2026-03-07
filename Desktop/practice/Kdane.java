import java.util.Scanner;
class Kdane{
    public static void main(String args[]){
        Scanner sc=new Scanner (System.in);
        int a[]={-2,-3,4,2,-1,-2,-3};
       boolean r=true;
        for(int i=0;i<a.length;i++){
            if(a[i]>=0){
                 r=false;
                 break;

            }
            
        }
         if(r){
            int sm=a[0];
            for(int i=0;i<a.length;i++){
                if(a[i]>sm){
                    sm=a[i];
                }
            }
            System.out.println(sm);
        }
        else{
 int cs=0;
        int ms=Integer.MIN_VALUE;
        for(int i=0;i<a.length;i++){
            cs+=a[i];
            if(cs<0){
                cs=0;
            }
            if(cs>ms){
                ms=cs;
            }
        }

       
      
        System.out.println(ms);
        }
        
       

    }
}
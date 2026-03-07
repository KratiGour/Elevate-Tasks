import java.util.Scanner;
class Sum{
    public static void main(String args[]){
        Scanner sc=new Scanner (System.in);
        int a[][]= new int [3][3];
        int sum=0;
        System.out.println("Enter which rows sum you want to calculate:");
        int s=sc.nextInt();

        System.out.println("Enter elements of first matrix:");
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                a[i][j]=sc.nextInt();
                
            }
        }
     
            for(int j=0;j<3;j++){
                sum+=a[s][j];
            }
        
        System.out.println(sum);
    }
}
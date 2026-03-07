import java .util.Scanner;
class Asymmetric{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int a[][]=new int[3][3];
        System.out.println("Enter elements of matrix:");    
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                a[i][j]=sc.nextInt();

            }
        }
         for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                System.out.print(a[j][i]+" ");
             
            }
               System.out.println();
        }

    }
}
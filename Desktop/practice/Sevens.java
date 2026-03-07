import java.util.Scanner;
public class Sevens {
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int a[][]=new int[3][3];
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
                a[i][j]=sc.nextInt();

            }
        }
        int count=0;
        System.out.println("Enter the elements of the matrix:");
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
               if(a[i][j]==7){
                   count++;
               }

            }
        }
        System.out.println(count);

    }

}

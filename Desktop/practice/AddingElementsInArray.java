import java.util.Scanner;

class AddingElementsInArray{
           static  Scanner sc=new Scanner(System.in);

    public static void insertAtBeg(int a[]){
        int a2[]=new int[a.length+1];
        System.out.println("Enter element to add in begning");
        
        int k=sc.nextInt();
        a2[0]=k;
        int j=0;
        for(int i=1;i<a2.length;i++){
            a2[i]=a[j];
            j++;
        }
        for(int i:a2){
            System.out.print(i+" ");
        }
    }
    public static void insertAtEnd(int a[]){
        int a2[]=new int[a.length+1];
        System.out.println();
        System.out.println("Enter element to add in Ending");
        
        int k=sc.nextInt();
        a2[a2.length-1]=k;
        for(int i=0;i<a.length;i++){
            a2[i]=a[i];
        }
        for(int i:a2){
            System.out.print(i+" ");
        }
    }
    public static void insertAtSpecific(int a[]){
        System.out.println();
                System.out.println("Enter element and position to add the element ");
                int k=sc.nextInt();
                int pos=sc.nextInt();
                int a2[]=new int [a.length+1];
               for(int i=0;i<pos;i++){
                a2[i]=a[i];
               }
               a2[pos]=k;
               for(int i=pos;i<a2.length-1;i++){
                a2[i+1]=a[i];
               }
                 for(int i:a2){
            System.out.print(i+" ");
        }


    }
    
    public static void main(String args[]){
        int a[]={1,2,3,4,6};
        insertAtBeg(a);
        insertAtEnd(a);
        insertAtSpecific(a);

    }
}
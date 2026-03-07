import java.util.*;
class ShortestPath{
    public static int shortestPath(String d){
        int x=0;
        int y=0;
        int l=d.length();
        for(int i=0;i<l;i++){
            if(d.charAt(i)=='N'){
                y++;
            }
            else if(d.charAt(i)=='S'){
                y--;
            }
            else if(d.charAt(i)=='E'){
                x++;
            }
            else if(d.charAt(i)=='W'){
                x--;
            }
        }
        int distance=(int)Math.sqrt(x*x+y*y);
        return distance;
    }
    public static void main(String args[]){
        Scanner sc=new Scanner (System.in);
        System.out.println("Enter dirsctions in the form of string ");
       String d=sc.nextLine();
       int result=shortestPath(d);
       System.out.println("Shortest path is: "+result);
        
    }
}
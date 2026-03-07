import java.util.*;
class Implement{
public void Demo(int a[]){
    HashMap<Integer,Integer>result=new HashMap<>();
    for(int i:a)
    result.put(i,result.getOrDefault(i,0)+1);
    System.out.println("Repeating elements are:");
    for(Map.Entry<Integer,Integer> entry:result.entrySet()){
        if(entry.getValue()==1){
            System.out.println(entry.getKey() + " ");
        }
    }
}
}
class CountRepeatedElement{
    
    public static void main(String args[]){
        int a[]={1,1,5,5,2,2,7,4,2,1,8};
Implement obj=new Implement();
        obj.Demo(a);
    }
}
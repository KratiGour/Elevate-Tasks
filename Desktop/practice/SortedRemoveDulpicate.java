import java.util.*;
class SRD{
     public static List<Integer> RD(int a[]){
          HashMap<Integer,Boolean> seen=new HashMap<>();
          List<Integer>result=new ArrayList<>();
          for(int i:a){
            if(!seen.containsKey(i)){
                result.add(i);
                seen.put(i,true);
            }
          }
          return result;

        }
}
class SortedRemoveDuplicate{
    public static void main(String args []){ 
       SRD OBJ=new SRD();
        int a[]={1,4,1,5,2,7,4,7,3,8};
        List<Integer> result=OBJ.RD(a);
        for(int i :result){
            System.out.print(i+" ");
        }

    }
}
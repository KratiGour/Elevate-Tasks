import java.util.*;
class ReplaceWithRank{
    public int[] rank(int a[]){
    int rank=1;
            int []b=a.clone();

    HashMap <Integer,Integer> rm=new HashMap<>();
    Arrays.sort(b);
    for(int i:b){
        if(!rm.containsKey(i)){
           rm.put(i,rank);
           rank++;

        }

    }
    int result[]=new int[a.length];
    for(int i=0;i<a.length;i++){
        result[i]=rm.get(a[i]);
    }
return result;
    
    }
}


class Rank{
    public static void main(String args[]){
        int a[]={20,15,26,2,98,6};
        ReplaceWithRank obj=new ReplaceWithRank();
        int result[]=obj.rank(a);
        for(int i: result){
            System.out.print(i +" ");
        }
    }
}
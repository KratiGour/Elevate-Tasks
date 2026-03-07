import java.util.*;
class CountFrequency{
    public static void main(String args[]){
        int a[]={1,2,3,1,2,4,1,5,3,2};
        HashMap<Integer,Integer>hp=new HashMap <>();
        for(int i=0;i<a.length;i++){
            int num=a[i];
            hp.put(num,hp.getOrDefault(num,0)+1);


        }
          System.out.println("Frequencies");
          
        for(int key:hp.keySet()){
            System.out.println(key+" : "+hp.get(key));
        }

    }
}
import java.util.*;

class RemoveDuplicate {
    
    public static int RD(int a[]) {
        if (a.length == 0) {
            return 0;
        }

        int i = 0;
        for (int j = 1; j < a.length; j++) {
            if (a[i] != a[j]) {
                i++;
                a[i] = a[j];
            }
        }
        return i + 1;
    }
     public static int ByHashSet(int a[]){
            HashSet <Integer>seen= new HashSet<>();
            int i=0;
            for(int j:a){
                if(!seen.contains(j)){
                    seen.add(j);
                    a[i]=j;
                    i++;
                }
            }
            return i;
     }
    public static void main(String[] args) {
        int a[] = {0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4};
        //int k = RD(a);
        int l=ByHashSet(a);
        System.out.println("Length of unique array: " + l);
        for (int i = 0; i < l; i++) {  
            System.out.print(a[i] + " ");
        }
        System.out.println();
    }
}

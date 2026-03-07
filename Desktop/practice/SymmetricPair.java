class SymmetricPair{
    public static void Result(int [][]a){
            for(int i=0;i<a.length;i++){
                for(int j=i+1;j<a.length;j++){
                    if(a[j][0]==a[i][1]&&a[j][1]==a[i][0]){
                        System.out.print("("+a[i][1] +","+a[i][0]+")");
                    }
                }
            }

        }
    public static void main(String args[]){
        
        int a[][]={{1,2},{2,1},{3,1},{4,6},{6,4}};
        Result(a);

    }
}
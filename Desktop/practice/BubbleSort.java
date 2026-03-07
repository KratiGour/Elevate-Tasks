class BubbleSort{
    public static void main(String args[]){
        int a[]={1,2,3,2,4,3,1,2};
        for(int i=0;i<a.length;i++){
            for(int j=0;j<a.length-1;j++){
                if(a[j]>a[j+1]){
                    int temp=a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                }
            }
            
        }
        for(int i: a){
                System.out.print(i+" ");
            }
    }
}
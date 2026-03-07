class ArrayMinMax{
    public static void main(String args[]){
        int a[]={2,4,-1,5,9,10,3};
        int min=Integer.MAX_VALUE;
        int max=Integer.MIN_VALUE;
        int Smin=Integer.MAX_VALUE;
        int Smax=Integer.MIN_VALUE;
        for(int i=0;i<a.length;i++){
            if(a[i]<min){
                Smin=min;
                min=a[i];

            }
            else if(a[i]<Smin && a[i]!=min){
                Smin=a[i];
            }
        }
        for(int i=0;i<a.length;i++){
            if(a[i]>max){
                Smax=max;
                max=a[i];

            }
            else if(a[i]>Smax && a[i]!=max){
                Smax=a[i];
            }
        }
        System.out.println(min);
        System.out.println(max);
        System.out.println(Smin);
        System.out.println(Smax);

    }
}
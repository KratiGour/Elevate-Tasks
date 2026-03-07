class Abundant{
    public static void main(String[] args){
        int a=21;
        String s=Integer.toString(a);
        int sum=0;
        for(int i=0;i<s.length();i++){
            sum+=s.charAt(i)-'0';
        }
        if(sum>a){
            System.out.println("Abundant");
        }
        else{
            System.out.println("Not Abundant");
        }

    }
}
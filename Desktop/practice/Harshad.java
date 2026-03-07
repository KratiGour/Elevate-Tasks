class Harshad{
    public static void main(String args){
        int a=378;
        String s=Integer.toString(a);
        int sum=0;
        for(int i=0;i<s.length();i++){
            sum+=s.charAt(i)-'0';
        }
        System.out.println(sum);
        if(a%sum==0){
            System.out.println("Harshad Number");
        }
        else{
            System.out.println("Not Harshad Number");
        }

    }
}
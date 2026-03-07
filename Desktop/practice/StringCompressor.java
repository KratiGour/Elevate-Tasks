import java.util.Scanner;

class StringCompressor{
    public static String Compressor(String s){
        StringBuilder sb= new StringBuilder();
            for(int i=0;i<s.length();i++){
            Integer count=1;
            while(i<s.length()-1 && s.charAt(i)==s.charAt(i+1)){
                count++;
                i++;
            }
            sb=sb.append(s.charAt(i));
            sb.append(count);
        }
        return sb.toString();

}
    public static void main(String args[]){
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter String");
        String s=sc.next();
String result=Compressor(s);
System.out.println(result);

    }
}
import java.util.Scanner;

public class StringPalindrome {

public static boolean isPalindrome(String s){
    int n=s.length();
    for(int i=0;i<s.length()/2;i++){
if(s.charAt(i)!=s.charAt(n-1-i)){
 return false;
}
    }
    return true;

}    public static void main(String args[]){
        
        Scanner sc=new Scanner (System.in);
        System.out.println("Enter A string to check if its palindrome or not ");
        String s=sc.next();
        boolean result = isPalindrome(s);
        System.out.println(result);
    }
}
    
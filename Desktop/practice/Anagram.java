import java.util.*;
//import java.util.Arrays;
class CheckAnagram{
    public boolean A(String s1,String s2){
s1=s1.toLowerCase();
s2=s2.toLowerCase();
if(s1.length()==s2.length()){
char [] a1=s1.toCharArray();
char [] a2=s2.toCharArray();

Arrays.sort(a1);
Arrays.sort(a2);

if(Arrays.equals(a1,a2)){
    return true;
}
}

return false;

    }
}
class Anagram{
    public static void main(String args[]){
Scanner sc=new Scanner (System.in);
System.out.println("Enter Strings ");
String s1=sc.next();
String s2=sc.next();
CheckAnagram ob= new CheckAnagram();
boolean result=ob.A(s1,s2);
System.out.println(result);
    }
}
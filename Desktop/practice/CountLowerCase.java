import java.util.Scanner;
class CountLowerCase{
    public static int CountLowercaseVowel(String s){
  //an s=s.toLowerCase();
    int count=0;
    for(int i=0;i<s.length();i++){
        char ch=s.charAt(i);
        if(ch =='a'||ch=='i'||ch=='o'||ch=='u'||ch=='e'){
            count++;
        }

    }
    
   return count;

    }
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter String");
        String s=sc.next();
        int count=CountLowercaseVowel(s);
        System.out.println(count);
    }
}
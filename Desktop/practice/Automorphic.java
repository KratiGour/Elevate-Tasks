class Automorphic{
    public static void main(String args){
      int a=76;
      int sq=a*a;
      while(a>0){
        if(a%10!=sq%10){
          System.out.println("Not an Automorphic Number");
          return;
        }
        a=a/10;
        sq=sq/10;
      }
    }
    }

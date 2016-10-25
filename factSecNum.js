function factSecNum(x) {
   if( x==0 || x==1 ) {
      return 1;
   }
   //using recursion
   return x * factSecNum(x-2);
}
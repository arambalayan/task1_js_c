#include <iostream>

using namespace std;

char* concat(char* str1, char* str2) {
   int i = 0, j = 0;

   while (str1[i] != '\0') {
        i++;
    }
    
    while (str2[j] != '\0') {
        str1[i] = str2[j];
        j++;
        i++;
    }
    
    str1[i]='\0';
    
   return str1;
	
}

char* strset(char* s, char* ch){
	int i = 0;
	while (s[i] != '\0') {
		s[i] = *ch;
        	i++;
    	}
    	return s;
}

int main() {

    char str1[] = "Aram";
    char str2[] = "Balayan";
    cout << concat(str1, str2) << endl;
    char s[] = "Aram";
    char ch[] = "*";
    cout << strset(s, ch) << endl;
}

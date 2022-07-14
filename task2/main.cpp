#include <iostream>
#include <cstring>

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

void strmove(char* arr, int n){
    int last, length = strlen(arr);  
    for(int i = 0; i < n; i++){  
        last = arr[length-1];  
        for(int j = length-1; j > 0; j--){  
            arr[j] = arr[j-1];  
        }  
        arr[0] = last;  
    }  
}

int main() {

    char str1[] = "Aram";
    char str2[] = "Balayan";
    cout << concat(str1, str2) << endl;
    
    char s[] = "Aram";
    char ch[] = "*";
    cout << strset(s, ch) << endl;
    
    char s1[] = "hello";
    int n = 2;
    strmove(s1, n);
    cout << s1 << endl;
    
}

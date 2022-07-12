#include <iostream>

using namespace std;

int fib(int x){
	if (x == 0){
        return 0;
    }

    if (x == 1){
        return 1;
	}

	return fib(x-1)+fib(x-2);
}

int strl(char* str) {
	int count = 0;
	while(*str != '\0'){
		count++;
		str++;
	}
	return count;
}

void reverse(char* str, int length) {
    int x;
    for (int i = 0; i < length/2; i++) {
        x = str[i];
        str[i] = str[length - i - 1];
        str[length - i - 1] = x;
    }
}

int main() {
	cout << fib(6) << endl;
    char str[] = "Aram";
	cout << strl(str) << endl;
    reverse(str,strl(str));
    cout << str << endl;

}

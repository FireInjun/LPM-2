function test(){
$A = (get-location).ToString()
New-Item test.txt -Value $A
}


//Program number 6
/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/
let persons_Name:string="\t\n Afshan Yasmeen \t";
console.log("The name before stripping is "+persons_Name);
persons_Name=persons_Name.trim();
console.log("The name after stripping is "+persons_Name);
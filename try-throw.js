try {
  eval('alert("Hello world)');
}
catch(error) {
  console.error(error);
  // expected output: SyntaxError: unterminated string literal
  // Note - error messages will vary depending on browser
}

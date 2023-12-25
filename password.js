//The simple Functionality of password visibility

check.onclick = togglepassword;
function togglepassword() {
  if (check.checked) pass.type = "text";
  else pass.type = "password";
}

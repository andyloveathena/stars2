function stars2(number) {
  let result = "";
  let another = "";
  for (i = 1; i <= number; i++) {
    result += "*";
    console.log(result);
  }
  for (j = number - 1; j >= 1; j--) {
    another = "";
    for (k = 1; k <= j; k++) {
      another += "*";
    }
    console.log(another);
  }
}

stars2(4);

const order = [ 20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread" ];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

function printPackageContents(...items) {
  for (const item of items) {
    console.log(item);
  }
}

printPackageContents("cheese", "eggs", "milk", "board");
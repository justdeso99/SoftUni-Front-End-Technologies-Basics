function search() {
   let input = document.getElementById("searchText").value;
   let result = document.getElementById("result");
   let listItems = document.querySelectorAll("#towns li");

   let sum = 0;

   for (const li of listItems) {
      if (li.textContent.toLowerCase().includes(input.toLowerCase()) && input !== ''){
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
         sum++;
      }
      else{
         li.style.fontWeight = "";
         li.style.textDecoration = "";
      }
   }

   result = `${sum} matches found`
}

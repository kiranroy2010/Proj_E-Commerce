// Printing HTML Page NATIVE FUNCTION

function printData() {
   var divToPrint = document.getElementById("prod-table");
   newWin = window.open("");
   newWin.document.write(divToPrint.outerHTML);
   newWin.print();
   newWin.close();
}

// Password Match

var check = function () {

   var password = document.getElementById('password');
   var vpassword = document.getElementById('checkPassword');

   if (password.value !== vpassword.value || password.value == "") {
      document.getElementById("disabledBTN").style.visibility = 'hidden';
   }
   else {
      document.getElementById("disabledBTN").style.visibility = 'visible';
   }


   if (document.getElementById('password').value ==
      document.getElementById('checkPassword').value) {
      document.getElementById('alertPassword').style.color = '#8CC63E';
      document.getElementById('alertPassword').innerHTML = '<span style="font-weight: 600;"><i class="fas fa-check-circle"></i>Match !</span>';
   } else {
      document.getElementById('alertPassword').style.color = '#EE2B39';
      document.getElementById('alertPassword').innerHTML = '<span style="font-weight: 600;"><i class="fas fa-exclamation-triangle"></i>not matching</span>';
   }
}

// Password Visibility toggle

function toggleUser() {
   var element = document.querySelector("#toggler");
   element.classList.toggle("toggle-theme");
}


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
   // toggle the type attribute
   const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
   password.setAttribute('type', type);
   // toggle the eye slash icon
   this.classList.toggle('fa-eye-slash');
});

const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const Confirmpassword = document.querySelector('#checkPassword');

toggleConfirmPassword.addEventListener('click', function (e) {
   // toggle the type attribute
   const type = Confirmpassword.getAttribute('type') === 'password' ? 'text' : 'password';
   Confirmpassword.setAttribute('type', type);
   // toggle the eye slash icon
   this.classList.toggle('fa-eye-slash');
});

// Filter using Product name

function query() {
   // Declare variables
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("searchInput");
   filter = input.value.toUpperCase();
   table = document.getElementById("prod-table");
   tr = table.getElementsByTagName("tr");

   // Loop through all table rows, and hide those who don't match the search query
   for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
         txtValue = td.textContent || td.innerText;
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
         } else {
            tr[i].style.display = "none";
         }
      }
   }
}

// filter by Marks

// Excel Export

function ExportToExcel(type, fn, dl) {
   var elt = document.getElementById('prod-table');
   var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
   return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
      XLSX.writeFile(wb, fn || ('Student Filtered Sheet.' + (type || 'xlsx')));
}



function reSum() {
   var num1 = parseInt(document.getElementById("Num1").value);
   var num2 = parseInt(document.getElementById("Num2").value);
   var num3 = parseInt(document.getElementById("Num3").value);
   var num4 = parseInt(document.getElementById("Num4").value);
   var num5 = parseInt(document.getElementById("Num5").value);
   var num6 = parseInt(document.getElementById("Num6").value);
   var num7 = parseInt(document.getElementById("Num7").value);
   var num8 = parseInt(document.getElementById("Num8").value);

   document.getElementById("Sum").value = ((num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8) / 8) ;

}






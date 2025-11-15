// input des
// $('#data').Datepicker()











// homw bage accordion 

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    // close other items
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      }
    });

    // toggle current item
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "–" : "+";
  });
});


const faqItems2 = document.querySelectorAll(".faq-item-2");

faqItems2.forEach(item => {
  const btn = item.querySelector(".faq-question-2");

  btn.addEventListener("click", () => {
    // close other items
    faqItems2.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      }
    });

    // toggle current item
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "–" : "+";
  });
});





// form//////////////////////////////////////////////
 
let form2 = document.querySelector('#myForm-2')

let fName = document.getElementById("fName")
let lName = document.getElementById("lName")
let dName = document.getElementById("dName")
let destext = document.getElementById("destext")
let phoneNum = document.getElementById("phoneNum")
let email = document.getElementById("email")
let pValid = document.getElementById("validation")







// form.addEventListener('submit' , (e)=>{
  //     e.preventDefault()
  //     console.log('submit')
  // })
  let nameValidation = (input)=>{
    
    let inputValue = input.value.trim()
    if(inputValue.length < 4)
      handleError(input , "at least 4 character")
    else 
      handleError(input)
  }
  
  let handleError = (input , msg = "")=>{
    input.nextElementSibling.innerText = msg
  }
  if(document.getElementById('myForm')){

    let form = document.querySelector('#myForm')
  form.addEventListener('input' , (e)=>{
  
      if(e.target.id == "fName"){
          nameValidation(e.target)
      }
      else if (e.target.id == 'fName')
          emailValidation(e.target)
        
        if(e.target.id == "lName"){
          nameValidation(e.target)
      }
      else if (e.target.id == 'userEmail')
          emailValidation(e.target)
  
        
        if(e.target.id == "dName"){
          nameValidation(e.target)
      }
      else if (e.target.id == 'userEmail')
          emailValidation(e.target)
  
  
      if(e.target.id == "phoneNum"){
          phoneValidation(e.target)
      }
      else if (e.target.id == 'phoneNum')
          phoneValidation(e.target)
  
      if(e.target.id == "email"){
          emailValidation(e.target)
      }
      else if (e.target.id == 'email')
          emailValidation(e.target)
  
  }
  )
  }


let phoneValidation = (input)=>{

    let inputValue = input.value.trim()
    if(inputValue.length == "" || isNaN(inputValue))
        handleError(input , " Enter your phone number")
         else  if(inputValue.length < 11)
        handleError(input , " Enter at least 11 number")
    else 
        handleError(input)
}

// form.addEventListener('input' , (e)=>{
// if(e.target.id == "phoneNum"){
//         phoneValidation(e.target)
//     }
//     else if (e.target.id == 'phoneNum')
//         phoneValidation(e.target)


// })

let emailValidation = (input)=>{
    let inputValue = input.value
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    console.log(reg.test(inputValue))
     if(inputValue.length == "" || null || undefined)
        handleError(input , " enter your email")
    else if(!reg.test(inputValue)) handleError(input , "enter a valid email ")
        else handleError(input)

}


 
 
 


// form.addEventListener('input' , (e)=>{
// if(e.target.id == "email"){
//         emailValidation(e.target)
//     }
//     else if (e.target.id == 'email')
//         emailValidation(e.target)


// })











  
 


// let UploadInput = document.getElementById('UploadInput')
// let uploadBtn = document.getElementById('uploadBtn')
// uploadBtn.addEventListener('click' , ()=>{
//     UploadInput.click()
// })


 const uploadBtn = document.getElementById('uploadBtn');
    const uploadInput = document.getElementById('uploadInput');
    const preview = document.getElementById('preview');

const uploadBtn2 = document.getElementById('uploadBtn-2');
    const uploadInput2 = document.getElementById('uploadInput-2');
    const preview2 = document.getElementById('preview-2');


if(uploadBtn){
  uploadBtn.addEventListener('click', () => {

      uploadInput.click();
    });



    uploadInput.addEventListener('change', () => {

      preview.innerHTML = '';
      const files = uploadInput.files;



      for (const file of files) {

        if (!file.type.startsWith('image/')) continue;
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.onload = () => URL.revokeObjectURL(img.src);
        preview.appendChild(img);
      }
    });


}



if(uploadBtn2){
  uploadBtn2.addEventListener('click', () => {

      uploadInput2.click();
    });



    uploadInput2.addEventListener('change', () => {

      preview.innerHTML = '';
      const files = uploadInput2.files;



      for (const file of files) {

        if (!file.type.startsWith('image/')) continue;
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.onload = () => URL.revokeObjectURL(img.src);
        preview2.appendChild(img);
      }
    });


}

  





document.addEventListener("DOMContentLoaded", function() {

    const deleteButtons = document.querySelectorAll(".accordion-button span.text-danger");

    deleteButtons.forEach(btn => {

      btn.addEventListener("click", function(e) {

        e.stopPropagation(); 
        const accordionItem = this.closest(".accordion-item");

        
        if (accordionItem) {
          accordionItem.remove(); 
        }
      });
    });
  });

























    function addTableRow(user) {
    let tr = document.createElement('tr')
    
    
    let tdFirstName = document.createElement('td')
    tdFirstName.textContent = user.firstName
    tr.appendChild(tdFirstName)
    
    let tdLastName = document.createElement('td')
    tdLastName.textContent = user.lastName
    tr.appendChild(tdLastName)
    
    let tdActions = document.createElement('td')
    
   
    let editBtn = document.createElement('button')
    editBtn.className = 'btn btn-sm btn-primary me-2'
    editBtn.textContent = 'Edit user'
    editBtn.onclick = () => editRow(tr, user)
    
  
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-sm btn-danger'
    deleteBtn.textContent = 'Remove user'
    deleteBtn.onclick = () => deleteRow(tr)
    
    tdActions.appendChild(editBtn)
    tdActions.appendChild(deleteBtn)
    tr.appendChild(tdActions)
    
    tbody.appendChild(tr)
}







// tag


if(document.getElementById('myForm')){


  UseBootstrapTag(document.getElementById('example'))

}














if(document.getElementById('myForm')){



const form = document.getElementById('myForm-2');
  const addNewBtn = document.getElementById('addNew');


  addNewBtn.addEventListener('click', function (e) {
    e.preventDefault(); 

    const newLine = document.createElement('div');
    newLine.classList.add('membership-line', 'row', 'align-items-start');

    newLine.innerHTML = `
      <div class="col-12 col-md-3 pb-4">
        <div class="form-wrap">
          <label class="form-label">Title <span class="text-danger">*</span></label>
          <input class="form-control" placeholder="Add Title" type="text">
        </div>
      </div>

      <div class="col-12 col-md-9">
        <div class="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-2">
          <div class="form-wrap w-100 pb-4 pb-md-0">
            <label class="form-label" style="font-weight: 500;">About Membership</label>
            <div class="d-flex justify-content-between align-items-center gap-3">
              <input class="form-control" type="text">
              <a href="#" class="text-danger delete-line">Delete</a>
            </div>
          </div>
        </div>
      </div>
    `;

  
    form.insertBefore(newLine, form.querySelector('.add-new'));
  });


  form.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-line')) {
      e.preventDefault();
      const line = e.target.closest('.membership-line');
      if (line) line.remove();
    }
  });

}

  











///////////////////////////////////chart/////////////



if(document.getElementById('myChart')){



let ctx = document.getElementById('myChart');

  new Chart(ctx, {type: 'bar',
    data: {
      labels: ['MON', 'TUE', 'WED', 'THU','FRI', 'SAT', 'SUN'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3,5],
        borderWidth: 1
         
          
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['MON', 'TUE', 'WED', 'THU','FRI', 'SAT', 'SUN'],
      datasets: [{
        label: '# of Votes',
        data: [2, 1, 13, 50, 25, 13,5],
        borderWidth: 1
          // backgroundColor:"blue"
          
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
 














// scrolllbtn

if(document.getElementById('scrollBtn')){




const scrollBtn = document.getElementById('scrollBtn');
    const ringValue = document.querySelector('.progress-ring__value');
    const radius = ringValue.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    ringValue.style.strokeDasharray = `${circumference} ${circumference}`;
    ringValue.style.strokeDashoffset = circumference;

    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      const offset = circumference - progress * circumference;
      ringValue.style.strokeDashoffset = offset;

      if (scrollTop > 150) {
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('show');
      }
    }

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', updateProgress);
    window.addEventListener('resize', updateProgress);

}
   


if(document.getElementById('slide-1')){

  $(document).ready(function () {
      $('#slide-1').owlCarousel({
        loop: true,
        nav: true,
           margin:0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        responsiveClass: true,
        // navText:[`<i class="fa-solid fa-bars"></i>` , `  <i class="fa-solid fa-bars"></i>`], 
        responsive: {
          0: {
            items: 2,
            // nav: false,
          },
          769: {
            items: 3,
            // nav: true,
          },
          1000: {
            items: 6,
            // nav: true,
          }
        }
      })
    });

    $(document).ready(function () {
      $('#slide-2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
          0: {
            items: 2,
            nav: false,
          },
          769: {
            items: 3,
            nav: false,
          },
          1000: {
            items: 4,
            nav: false,
          }
        }
      })
    });
}
  



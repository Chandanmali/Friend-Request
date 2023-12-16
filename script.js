const text = document.querySelector('.text');
       const btnOne = document.querySelector('.btn-1');
       // const btnTwo = document.querySelector('.btn-2');
       let imgHappy = document.querySelector(".img");

       let check = 0;

       btnOne.addEventListener("click", function () {
              if (check == 0) {

                     text.innerHTML = 'Friends';
                     text.style.color = 'green';
                     btnOne.style.backgroundColor = "rgb(202, 198, 198)"
                     // btnTwo.style.backgroundColor = "darkcyan";
                     btnOne.innerHTML = 'Remove Friend';

                     imgHappy.setAttribute("src", "./images/smile modi.jpg");
                     console.log("h")
                     check = 1;
              }
              else {
                     text.innerHTML = 'Stranger';
                     text.style.color = 'crimson';
                     btnOne.innerHTML = 'Add Friend';
                     btnOne.style.backgroundColor = 'darkcyan';
                     imgHappy.setAttribute("src", "./images/sad2.webp");
                     check = 0;
              }

       })


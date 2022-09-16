// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step1) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
//   },
//   (error) => console.log(error)
// );

getInstruction(
  "mashedPotatoes",
  0,
  (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step}</li>`;
                    getInstruction(
                      "mashedPotatoes",
                      5,
                      (step) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>mashed potatoes are ready!</li>`;
                        document
                          .querySelector("#mashedPotatoesImg")
                          .removeAttribute("hidden");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// getInstruction(
//   "mashedPotatoes",
//   0,
//   (step) => {
//     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
//   },
//   (error) => console.log(error)
// );

// Iteration 2 - using promises
// ...

// diego:

obtainInstruction("steak", 0)
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step) => {
    document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
    document.querySelector("#steak").innerHTML += `<li>steak is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });
//

// obtainInstruction("steak", 0).then((step) => {
//   document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//   obtainInstruction("steak", 1).then((step) => {
//     document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//     obtainInstruction("steak", 2).then((step) => {
//       document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//       obtainInstruction("steak", 3).then((step) => {
//         document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//         obtainInstruction("steak", 4).then((step) => {
//           document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//           obtainInstruction("steak", 5).then((step) => {
//             document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//             obtainInstruction("steak", 6).then((step) => {
//               document.querySelector("#steak").innerHTML += `<li>${step}</li>`;
//               document.querySelector(
//                 "#steak"
//               ).innerHTML += `<li>steak is ready!</li>`;
//               document.querySelector("#steakImg").removeAttribute("hidden");
//             });
//           });
//         });
//       });
//     });
//   });
// });

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  for (let step = 0; step < broccoli.length; step++) {
    await obtainInstruction("broccoli", step)
      .then((step) => {
        document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  await obtainInstruction("broccoli", 6).then(() => {
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>broccoli is ready!</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  });
}
makeBroccoli();
// Bonus 2 - Promise all
// ...

const instructions = [];

for (let i = 0; i < brusselsSprouts.length; i++) {
  instructions.push(obtainInstruction("brusselsSprouts", i));
}

Promise.all(instructions).then((instructions) => {
  instructions.forEach((step) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  });
});

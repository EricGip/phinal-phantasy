$(document).ready(function() {
  console.log("hello");

  // var boughtItem=$(".btn");
  // $(document).on(".btn", "#item", handleboughtItems);
  // getItems();

  // function handleboughtItems(event){
  //   event.preventDefault();
  //   if(!boughtItem.val().trim().trim()){
  //     return;
  //   }
  //   upsertItem({
  //     item: boughtItem
  //     .val()
  //     .trim()
  //   });
  // }

  //   function upsertItem(itemData){
  //     $.post("/api/user_stats", itemData)
  //     .then(getItems);
  //   }

  const storeItems = document.querySelector(".storeItem");

  const signHover = anime({
    targets: storeItems,
    translateX: 400,
    direction: "alternate",
    loop: true,
    easing: "steps(4)"
  });

  const tifaWalk = document.querySelector(".tifaStore");

  const tifaWalking = anime({
    targets: tifaWalk,
    translateY: 250,
    direction: "alternate",
    loop: true,
    easing: "steps(3)"
  });

  const cloudWalk = document.querySelector(".cloudStore");

  const cloudWalking = anime({
    targets: cloudWalk,
    translateY: 250,
    direction: "alternate",
    loop: true,
    easing: "steps(3)"
  });

  var Stats;
  $.ajax("api/user_stats").then(function(Stats) {
    Stats = Stats;
    // console.log("ajax");
    console.log(Stats);

    $(document).on("click", ".buy", function(event) {
      var picked = $(this).attr("data");
      console.log("clicked");

      let user = Stats;
      console.log(Stats);
      switch (picked) {
        case "sword":
          $("#axe, #hammer").addClass("disabled");
          user.attack = user.attack + 3;
          user.defense = user.defense + 5;
          user.speed = user.speed + 5;
          user.gil = user.gil - 5;

          $.ajax("/api/updateStats", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });

          $.ajax("/api/updateGil", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });

          //   console.log(Stats);
          $("#sword").addClass("disabled");
          $("#sword").prop("disabled", true);
          break;

        case "axe":
          $("#sword, #hammer").addClass("disabled");
          user.attack = user.attack + 4;
          user.defense = user.defense + 3;
          user.speed = user.speed + 3;
          user.gil = user.gil - 5;

          $.ajax("/api/updateStats", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });

          $.ajax("/api/updateGil", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });

          $("#axe").addClass("disabled");
          $("axe").prop("disabled", true);
          break;

        case "hammer":
          $("#sword, #axe").addClass("disabled");
          user.attack = user.attack + 5;
          user.defense = user.defense + 2;
          user.speed = user.speed + 2;
          user.gil = user.gil - 5;

          $.ajax("/api/updateStats", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });

          $.ajax("/api/updateGil", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });
          $("#hammer").addClass("disabled");
          $("#hammer").prop("disabled", true);
          break;

        case "potion":
          user.potion = user.potion + 1;
          user.gil = user.gil - 10;

          $.ajax("/api/updatePotion", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });

          $.ajax("/api/updateGil", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });

          
          console.log(user.potion);
          $("#potion").addClass("disabled");
          $("#potion").prop("disabled", true);
          break;

        case "light":
          $("#heavy").addClass("disabled");
          user.hp = user.hp + 15;
          user.attack = user.attack + 8;
          user.defense = user.defense + 20;
          user.speed = user.speed - 3;
          user.gil = user.gil - 25;

          $.ajax("/api/updateStats", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });

          $.ajax("/api/updateGil", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });
          $("#light").addClass("disabled");
          $("#light").addClass("disabled");
          break;

        case "heavy":
          $("#light").addClass("disabled");
          user.hp = user.hp + 15;
          user.attack = user.attack + 8;
          user.defense = user.defense + 50;
          user.speed = user.speed - 10;
          user.gil = user.gil - 25;

          $.ajax("/api/updateStats", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });

          $.ajax("/api/updateGil", {
            type: "PUT",
            data: Stats
          }).then(function(data) {
            console.log(data);
          });

          $("#heavy").addClass("disabled");
          $("#light").addClass("disabled");
          break;
      }
    });
  });
});

//         }
//     })
//   })

// }

// )

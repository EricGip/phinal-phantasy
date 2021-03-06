var stats;
$.ajax("api/user_stats").then(function(stats) {
  stats = stats;

  monsterStats = {
    name: "Sephiroth",
    hp: 210,
    attack: 120,
    defense: 80,
    src: "../assets/Sephiroth.gif",
  };

  $(document).on("click", ".action", function(event) {
    var action = $(this).attr("data");
    let user = stats;
    console.log("clicked");

    switch (action) {
      case "attack":
        console.log(monsterStats)
        monsterStats.hp -= user.attack - monsterStats.defense;
        $(".combat-log").append(
          "<br />" +
            "You strike! You hit the monster for " +
            (user.attack - monsterStats.defense)
        );
        $(".combat-log").append(
          "<br />" +
            "The " +
            monsterStats.name +
            " now has " +
            monsterStats.hp +
            " hp remaining"
        );

        if (monsterStats.hp > 0) {
          user.hp -= monsterStats.attack - (user.defense * 0.3);

          $(".combat-log").append(
            "<br />" +
              "The " +
              monsterStats.name +
              " retaliates! It strikes for " +
              (monsterStats.attack - (user.defense * 0.2))+
              "<br />"
          );

          $(".combat-log").append(
            "You now have " + user.hp + "hp remaining" + "<br />"
          );
        } else {
          $(".combat-log").append(
            "<br />" + "The " + monsterStats.name + " falls " + "<br />"
          );
        }

        if (user.hp <= 0) {
          $(".combat-log").append("<br />" + "You died!" + "<br />");
        } else {
          break;
        }

        // user.hp -= monsterStats.attack - user.defense;
        // $(".combat-log").append( "<br />" + "attack " + monsterStats.attack + " damage")

        console.log("attack", user.hp, monsterStats.attack, monsterStats.hp);
        console.log(user);
        console.log(monsterStats);
        break;

      case "guard":
        user.hp -= monsterStats.attack - user.defense * 2;
        $(".combat-log").append(
          "<br />" +
            "You wisely defend... the " +
            monsterStats.name +
            " hits you for " +
            (monsterStats.attack - user.defense * 2) +
            "<br />"
        );

        if (user.hp <= 0) {
          $(".combat-log").append("<br />" + "You died!" + "<br />");
        } else {
          break;
        }

        // $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")
        console.log("guard", user, monsterStats);
        break;

      case "potion":
        if (user.potion > 0) {
          user.hp += Math.floor(user.hp / 4) + 10;
          user.potion -= 1;
          $(".combat-log").append(
            "<br />" +
              "You drink a potion and heal for " +
              (Math.floor(user.hp / 4) + 10)
          );
          $(".combat-log").append(
            "<br />" + "You now have " + user.potion + " potions" + "<br />"
          );
        } else {
          $(".combat-log").append("<br />" + "You're out of pots!" + "<br />");
        }

        // $("#combat-log").append("you heal for 20 hp")
        // $("#combat-log").append("you hit" + { monster } + "for" + { dmg } + "damage")
        console.log("potion", user.hp);

        break;

      case "run":
        $(".combat-log").append(
          "<br />" +
            "You attempt to flee... " +
            "<br />" +
            "failed..." +
            "<br />"
        );

        break;

      default:
      // code block
    }
  });
});

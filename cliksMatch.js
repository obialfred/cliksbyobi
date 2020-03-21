var intMatch;
var ethicsCompScore;
var tplacement;


const userComparison = {
    intMatch: 4,
    ethicsCompScore: 20,
    intLevel: function (intMatch) {
        //  the intmatch would be the variable assigned to the amount of times the program matches the same interests between two users
        // var a_level = 100;
        // var b_level = 80;
        // var c_level = 60;
        // var g_level = 40;

        var i_level;

        if (this.intMatch >= 4) {
            i_level = 100;
            return i_level;
        } else if (this.intMatch >= 3) {
            i_level = 80;
            return i_level;
        } else if (this.intMatch >= 2) {
            i_level = 60;
            return i_level;
        } else {
            i_level = 0; //was previously set to 40
            return i_level;
        }

    },

    ethicsLevel: function (ethicsCompScore) {
        //  the ethicsCompScore would be the variable assigned to the score given when program compares two users' answers to the Ethics Quiz
        // bm = "bad_match";
        // nm = "neutral_match";
        // gm = "good_match";
        // em = "excellent_match";
        // var bm = 30;
        // var nm = 45;
        // var gm = 60;
        // var em = 75;
        var ethics;
        // Highest possible from user.scores array = 50; divide 50 by 4 to know what to categorize by (12.5)
        if (this.ethicsCompScore >= 0 && this.ethicsCompScore < 12.5) {
            ethics = 75;
            return ethics;

        } else if (this.ethicsCompScore >= 12.5 && this.ethicsCompScore < 25) {
            ethics = 45; //formally 60
            return ethics;


        } else if (this.ethicsCompScore >= 25 && this.ethicsCompScore < 37.5) {
            ethics = 30; //formally 45
            return ethics;


        } else if (this.ethicsCompScore >= 37.5 && this.ethicsCompScore <= 50) {
            ethics = 5; //formally 30
            return ethics;
        }
    },
    convertScore: function (i_level, ethics) {
        // var intA = intLevel(a_level);
        // var intB = intLevel(b_level);
        // var intC = intLevel(c_level);
        // var intG = intLevel(g_level);

        // a_level = 100;
        // b_level = 80;
        // c_level = 60;
        // g_level = 40; Go into intLevel to change values


        var intsPossible = 100;
        //makes a score dividing intsPossible by the current instance of the returned val of intLevel
        // var interestScore = (this.intLevel()/intsPossible);

        // bm = 30;
        // nm = 45;
        // gm = 60;
        // em = 75;  Go into ethicsLevel to change values

        var ethicsPossible = 75;
        // var ethicsScore = (this.ethicsLevel()/ethicsPossible);

        var convPossible = ((intsPossible + ethicsPossible) /
            2) //87.5 : Average of the two highest possible scores (int and ethics)

        var convScore = ((userComparison.ethicsLevel() + userComparison.intLevel()) /
            2) //Average of the two scores of the users

        return convScore;
    },
    placement: function (convScore, tplacement) {
        // var tplacement;
        // console.log("ethics score is " + userComparison.ethicsLevel());
        // console.log("interest score is " + userComparison.intLevel());
        // Circle/chart placement; totalpossible = 87.5; decrement placement score by 21.75
        if (userComparison.convertScore() >= 65.75) {
            tplacement = "This user is a close friend";
            // console.log("inside placement: "+ tplacement);
            return tplacement;
            // code to add into CF_div (CF = close friends)
        } else if (userComparison.convertScore() >= 44) {
            tplacement = "This user is a friend";
            return tplacement;
            // code to add into F_div (F = friends)
        } else if (userComparison.convertScore() >= 22.25) {
            tplacement = "This user is an acquaintance";
            return tplacement;
            // code to add into A_div (A = acquaintances)
        } else if (userComparison.convertScore() < 22.25) {
            tplacement = "This user should not show (general user)";
            return tplacement;
            // code to hide
        }
    },


};

// if (userComparison.placement() == "This user is a close friend") {

// }
// $("#cf_div").html();
userComparison.placement();
console.log(userComparison.intLevel());
console.log(userComparison.ethicsLevel());
console.log(userComparison.convertScore());
// console.log(userComparison.placement());
console.log("tplacement: " + userComparison.placement());

// General idea of how to add a user circle, instead of '..placement', it would be the span with the user's img added.
if (userComparison.placement() == "This user is a close friend") {
    $(".CF_div").append("<span class='scale-up-center'>" + userComparison.placement() + "</span>");
} else if (userComparison.placement() == "This user is a friend") {
    $(".F_div").append("<span class='scale-up-center'>" + userComparison.placement() + "</span>");

} else if (userComparison.placement() == "This user is an acquaintance") {
    $(".A_div").append("<span class='scale-up-center'>" + userComparison.placement() + "</span>");

}
var currentUserData = {
    user_name: "Billy Bob",
    picture: "http://www.stefantell.se/blog/wp-content/uploads/2012/10/Profoto-Telezoom-reflector-through-diffusion-headshot.jpg",
    email: "billybob@gmail.com",
    password: "password",
    academic_info: ["Web Developer", "BS Degree", "Computer Science", "SFSU"],
    location: ["Amarillo", "TX", "USA"],
    interests: ["horseback riding", "sports", "painting", "fitness", "cars"],
    coolest_thing: "Rode a horse",

    scores: [5, 2, 3, 4, 5, 4, 4, 1, 5, 5]
}; //where current user data should go when registered or logged in 

const grabber = {
    // for retreiving current user info
    userReach: function () {
        var icomparor1 = currentUserData.interests;
        var scomparor2 = currentUserData.scores;
    },
    // for retreivieing other users for comparison
    otherReach: function (icomparor2, scomparor2) {
        var icomparor2 = usersData[j].interests
        var scomparor2 = usersData[j].scores;
        for (j = 0; j <= usersData.length; i++) {
            if (i == 1) {
                break;
            }
        }
    },
};

console.log(icomparor1 + "," + icomparor2);





// // For pulling user interests & scores (ethics):
// for (i = 0; i <= usersData.length; i++) {
//     if (i == 1) {
//         break;
//     }

// console.log(usersData[i].interests);
var icomparor1 = usersData[i].interests;
var scomparor1 = usersData[i].scores;

for (j = i + 1; j <= usersData.length; j++) {
    if (j == 2) {
        break;
    }
    // console.log(usersData[j].interests);




    // for (i) {
    //     console.log(comparor[i]);
    // }

    // var iarray1 = [];
    // var iarray2 = [];
    // var sarray1 = [];
    // var sarray2 = [];

    // for (i in icomparor1) {
    //     iarray1.push(icomparor1[i]);
    //     // console.log(comparor1[i]);
    // }

    // for (j in icomparor2) {
    //     iarray2.push(icomparor2[j]);
    //     // console.log(comparor2[j]);
    // }

    // console.log("Array 1: " + iarray1);
    // console.log("Array 2: " + iarray2);
    var testIntMatch = 0;
    var testEthDiff = 0;
    var xsum = 0;
    var ysum = 0;

    for (x in icomparor1) {
        for (y in icomparor2) {
            if (icomparor1[x] == icomparor2[y]) {
                testIntMatch++;
            }
        }
    }
    for (x in scomparor1) {
        xsum += scomparor1[x];
    }
    console.log("xsum: " + xsum);
    for (y in scomparor2) {
        ysum += scomparor2[y];
    }
    console.log("ysum: " + ysum);

    testEthDiff = ysum - xsum;
    console.log("1st EthDiff: " + testEthDiff);

    if (testEthDiff < 0) {
        testEthDiff = testEthDiff * (-1);
    }



    console.log("The intMatch is: " +
        testIntMatch); // You enclose all of this into a method and have the object call from it to get it's intMatch
    console.log("_________________________________________________")
    console.log("Final EthDiff: " + testEthDiff);
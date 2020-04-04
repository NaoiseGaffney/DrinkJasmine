whatCanIDrink = function(age) {
    if (age < 0) {
        return "You're not born yet, or 'acting the maggot'.";
    }
    else if (age < 14) {
            return "Drink Toddy";
    }
    else if (age < 18) {
            return "Drink Coke";
    }
    else if (age < 21) {
            return "Drink Beer";
    }
    else if (age <  130) {
            return "Drink Whiskey";
    }
    else {
        return "You're either too old to drink, or 'acting the maggot'.";
    }
};
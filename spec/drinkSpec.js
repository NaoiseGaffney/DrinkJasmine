describe('What can I drink:', function(){
    beforeEach(function(){
        drink = new whatCanIDrink();
    });

    describe('Age verification', function(){
        it('Should exist', function(){
            expect(whatCanIDrink).toBeDefined();
        });
        
        it(`Should return "You're not born yet, or 'acting the maggot'."`, function() {
            var result = whatCanIDrink(-1)
            expect(result).toBe(`You're not born yet, or 'acting the maggot'.`);
        });
            
        it('Should return "Drink Toddy" when called with whatCanIDrink(10) (less than 14)', function() {
            var result = whatCanIDrink(13)
            expect(result).toBe('Drink Toddy');
        });
        
        it('Should return "Drink Coke" when called with whatCanIDrink(15) (less than 18)', function() {
            var result = whatCanIDrink(15)
            expect(result).toBe('Drink Coke');
        });

        it('Should return "Drink Beer" when called with whatCanIDrink(20) (less than 21)', function() {
            var result = whatCanIDrink(20)
            expect(result).toBe('Drink Beer');
        });
        
        it('Should return "Drink Whiskey" when called with whatCanIDrink(50) (less than 130)', function() {
            var result = whatCanIDrink(50)
            expect(result).toBe('Drink Whiskey');
        });
        
        it('Should return You\'re either too old to drink, or acting the maggot when called with whatCanIDrink(130) anything above 129', function() {
            var result = whatCanIDrink(130)
            expect(result).toBe(`You're either too old to drink, or 'acting the maggot'.`);
        });     
    });
});

/* === whatCanIDrink() exists, and two of the tests are correct
3.5.0Options
finished in 0.042s
3 specs, 0 failures, randomized with seed 60427
What can I drink:
Age verification
Should exist
Should return "Drink Toddy" when called with whatCanIDrink(10) (less than 14)
Should return "Drink Coke" when called with whatCanIDrink(15) (less than 21)
*/

/* === Set expected result to be incorrect, 25 instead of anything less than 21
3.5.0Options
finished in 0.054s
4 specs, 1 failure, randomized with seed 61351
Spec List | Failures
What can I drink: > Age verification > Should return "Drink Beer" when called with whatCanIDrink(20) (less than 21)
Expected 'Drink Whiskey' to be 'Drink Beer'.
Error: Expected 'Drink Whiskey' to be 'Drink Beer'.
    at <Jasmine>
    at UserContext.<anonymous> (http://127.0.0.1:5500/spec/drinkSpec.js:26:28)
    at <Jasmine>
*/

/* === Missing 'return' in drink.js for under 21 if statement
3.5.0Options
finished in 0.029s
4 specs, 1 failure, randomized with seed 74067
Spec List | Failures
What can I drink: > Age verification > Should return "Drink Beer" when called with whatCanIDrink(20) (less than 21)
Expected undefined to be 'Drink Beer'.
Error: Expected undefined to be 'Drink Beer'.
    at <Jasmine>
    at UserContext.<anonymous> (http://127.0.0.1:5500/spec/drinkSpec.js:26:28)
    at <Jasmine>
*/

/* === When all tests run and test correctly!
3.5.0Options
finished in 0.021s
7 specs, 0 failures, randomized with seed 84907
What can I drink:
Age verification
Should return "Drink Coke" when called with whatCanIDrink(15) (less than 18)
Should return "Drink Beer" when called with whatCanIDrink(20) (less than 21)
Should return "Drink Whiskey" when called with whatCanIDrink(50) (less than 130)
Should exist
Should return You're either too old to drink, or acting the maggot when called with whatCanIDrink(130) anything above 129
Should return "You're not born yet, or 'acting the maggot'."
Should return "Drink Toddy" when called with whatCanIDrink(10) (less than 14)
*/
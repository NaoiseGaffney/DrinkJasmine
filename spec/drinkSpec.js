describe('What can I drink:', function(){
    beforeEach(function(){
        drink = new whatCanIDrink();
    });

    describe('Age verification', function(){
        it('Should exist', function(){
            expect(whatCanIDrink).toBeDefined();
        });

        
        it('Should return "Drink Toddy" when called with whatCanIDrink(10) (less than 14)', function() {
            var result = whatCanIDrink(13)
            expect(result).toBe('Drink Toddy');
        });
            
    });
});
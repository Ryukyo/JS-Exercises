let budgetController = (function() {
    
    let Income = new function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    let Expense = new function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    let data = {
        entries: {
            income: [],
            expense: []
        },
        totals: {
            income: [],
            expense: []
        }
    }

})();


let UIController = (function() {
    
    let DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };
       
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //'inc'-ome or 'exp'-ense
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },        
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();


let controller = (function(budgetCtrl, UICtrl) {
    
    let setupEventListeners = function() {
        let DOM = UICtrl.getDOMstrings();
        
        //Click on button or enter to accept user input
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });        
    };

    var ctrlAddItem = function() {
        var input, newItem;
        
        // Get the user input data
        input = UICtrl.getInput();        
        
        /* if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update budget
            updateBudget();
            
            // 6. Calculate and update percentages
            updatePercentages();
        } */
    };

    return {
        init: function() {
            console.log("Initialized Application")
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();
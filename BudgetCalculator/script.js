let budgetController = (function() {
    
    let Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    let data = {
        entries: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    };

    return {
        addItem: function (type, desc, val) {
            let ID, newItem;

            // Create new ID; 1st entry 0, rest calculated depending on current length of data
            if (data.entries[type].length > 0) {
                ID = data.entries[type][data.entries[type].length - 1].id + 1; 
            } else {
                ID = 0;
            };
            // Create new item depending on type with values and push to data object
            if (type === 'exp') {
                newItem = new Expense (ID, desc, val);
            } else if (type === 'inc') {
                newItem = new Income (ID, desc, val);
            };
            data.entries[type].push(newItem);

            return newItem;
        },
        /* testing: function() {
            console.log(data)
        } */
    };

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
        
        // Click on button or enter to accept user input
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });        
    };

    let ctrlAddItem = function() {
        let input, newItem;
        
        // Get the user input data
        input = UICtrl.getInput();

        //Verify valid input
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            /* Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // Clear the fields
            UICtrl.clearFields();

            // Calculate and update budget
            updateBudget();
            
            // Calculate and update percentages
            updatePercentages(); */
        } 
    };

    return {
        init: function() {
            console.log("Initialized Application");
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();
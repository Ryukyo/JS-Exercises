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
        },
        budget: 0,
        percentage: -1,
    };

    let calcTotals = function (type) {
        let sum = 0;
        data.entries[type].forEach(function(current) {
            sum += current.value;
        });
        data.totals[type] = sum; 
    }

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
        // Get all values necessary for budget calculation
        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

        calculateBudget: function() {
            calcTotals('inc');
            calcTotals('exp');

            // Calculate budget based by subtracting total expenses from total income
            data.budget = data.totals.inc - data.totals.exp;

            // Only if there is an income, calculate % of spent total income (to avoid division by 0) 
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
            }  
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
        },
        
        addListItem: function (obj, type) {
            let html, newHtml, element;

            // Depending on type of input object, create a placeholder HTML block
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            // Enrich placeholder string with the objects id, desc and val properties
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function () {
            let fieldsArr;

            fieldsArr = Array.prototype.slice.call(document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue));

            fieldsArr.forEach(function(current) {
                current.value = "";
            });

            fieldsArr[0].focus();
        },
        
        displayBudget: function (obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + ' %';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '-%-';
            }
        },
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

            //Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // Clear user input and set focus
            UICtrl.clearFields();

            // Calculate and update budget
            updateBudget();
            
            // Calculate and update percentages of each expense
            //updatePercentages();
        } 
    };

    let updateBudget = function () {
        let budget;

        // Calculate the budget
        budgetCtrl.calculateBudget();

        // Return budget
        budget = budgetCtrl.getBudget();

        // Display budget in UI
        UICtrl.displayBudget(budget);
    }

    return {
        init: function() {
            console.log("Initialized Application");
            UIController.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();
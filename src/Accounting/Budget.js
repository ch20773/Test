// yyyymm : amount
//
// const Budget = {
//     '202012' : 3100,
//     '202101' : 3100,
//     '202002' : 2800,
//     '202003' : 3100,
//     '202004' : 300,
//     '202005' : 310,
//     '202006' : 300,
//     '202007' : 6200,
//     '202008' : 6200,
//     '202009' : 9000,
//     '202010' : 6000,
//     '202011' : 6000,
//     '202012' : 930,
// };

class Budget {
    yearMouth;
    amount;
}

class BudgetFactory {
    static createBudge(dataList) {
        let budgetList = [];
        for (let dataInfo in dataList) {
            let data = dataList[dataInfo];
            budgetList.push(new Budget(data.yearMouth, data.amount));
        }

        return budgetList;
    }
}
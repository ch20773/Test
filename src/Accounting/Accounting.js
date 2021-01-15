const dayjs = require('dayjs');
const Budget = require('./Budget.js');
class Accounting {
    startTime;
    endTime;
    allData;

    constructor() {
        let md = new dayjs();
        this.startTime = '20210101';
        this.endTime = '20210131';
        this.allData = this.getAll();
        console.log('first', this.allData);
    }

    getAll() {
        return [new Budget('202101' , 31) , new Budget('202102' , 28) , new Budget('202103' , 31) ];
    }

    getMouthBudge(year, mouth) {
        const mouthBudge = this.allData.filter(item => item.yearMonth === `${year}${mouth}`);

        return mouthBudge;
    }

    getRangeBudge(star , monthCount) {
        let counter = 0;
        let list = [];
        for (let i = 0 ; i < monthCount ; i++) {
           let obj = new dayjs(star).add(counter , "month");
           let dateString = obj.format('YYYYMM');
            list.push( `${dateString}`);
            counter ++;
        }
        let a = this.allData.filter(item => {
            let v = list.indexOf(item.getYearMouth()) > -1;
            console.log(v);
            return v;
        });
        return a;
    }

    getEachDayBudge(days, budge) {
        return budge / days;
    }

    totalAmount(start, end) {
        let monthCount = this.getMouthCount();

        let data = this.getRangeBudge(start , monthCount);

        let sum = 0;
        data.forEach(data => {
            let eachAmount = this.getEachDayBudge( new dayjs(start).get('date'), data.amount);
            // let days =  this.getDaysDiffInMonth(data.yearMonth);
            sum += eachAmount;
        });

        // getMouthBudge()
        // 頭尾天數

    }

    getMouthCount() {
        return dayjs(this.endTime).diff(this.startTime, 'month')+1;
    }

    getDaysInMonth(yearMonth) {
        return dayjs(yearMonth).daysInMonth()
    }

    getDaysDiffInMonth(date) {
        let maxDays = this.getDaysInMonth(date);
        let nowDay = dayjs(date).get('date');
        return maxDays - nowDay + 1;
    }

}
let test = new Accounting();
test.totalAmount('20210101', '20210103');
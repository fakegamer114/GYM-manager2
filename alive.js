
console.log("welcome to console");

// دالة لحساب رقم الأسبوع في السنة
function getWeekNumber() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const pastDays = Math.floor((now - start) / 86400000);
    return Math.ceil((pastDays + start.getDay() + 1) / 7);
}

const week = getWeekNumber();

// لدينا 3 أيام: 1, 2, 3
// نريد الدوران بينها كل أسبوع
const activeDay = ((week - 1) % 3) + 1;

// تفعيل اليوم المناسب
document.getElementById("day" + activeDay).classList.add("active");

// وضع النص في الهيدر
document.getElementById("curent").innerText = "DAY " + activeDay;

console.log("Active Week Day =", activeDay);

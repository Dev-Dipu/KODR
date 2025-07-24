// Problem:
// Show a countdown timer from 30s after user clicks “Send OTP.” Disable resend button until timer ends.

// ✅ Steps:
// 	1.	Create button and text area for countdown
// 	2.	On click, disable button
// 	3.	Start interval using setInterval()
// 	4.	Show remaining time in DOM
// 	5.	When time hits 0, clear interval and enable button

const select = (elm) => document.querySelector(elm);

select(".sendotp").addEventListener("click", function () {
    this.disabled = true;
    let timer = 30;

    let intId = setInterval(() => {
        select(".timer").textContent = timer;
        --timer;
        if (timer === 0) {
            clearInterval(intId);
            this.disabled = false;
            select(".timer").textContent = timer = 30;
        }
    }, 1000);
});

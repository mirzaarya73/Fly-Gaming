function updatePaymentAmount(amount) {
    const paymentElements = document.querySelectorAll('.payment');
    paymentElements.forEach(el => {
        el.innerText = `Rp. ${amount}`;
    });
}

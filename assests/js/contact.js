function sendToWhatsApp() {
    // 1. Get Elements
    const fields = [
        { id: 'userName', errorId: 'nameError', msg: 'Please enter your name' },
        { id: 'userEmail', errorId: 'emailError', msg: 'Please enter a valid email' },
        { id: 'userMessage', errorId: 'messageError', msg: 'Please write a message' }
    ];

    let isValid = true;

    // 2. Clear previous errors
    fields.forEach(field => {
        const errorEl = document.getElementById(field.errorId);
        const inputEl = document.getElementById(field.id);
        errorEl.textContent = "";
        errorEl.classList.remove('show');
        inputEl.classList.remove('input-error');
    });

    // 3. Validate
    fields.forEach(field => {
        const inputEl = document.getElementById(field.id);
        const errorEl = document.getElementById(field.errorId);

        if (!inputEl.value.trim()) {
            errorEl.textContent = field.msg;
            errorEl.classList.add('show');
            inputEl.classList.add('input-error');
            isValid = false;
        }
    });

    if (!isValid) return;

    // 4. If valid, proceed to WhatsApp
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;
    
    const phoneNumber = "260974115510"; 
    const text = `*NEW INQUIRY - LUMORA BEAUTY*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
}
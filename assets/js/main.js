document.addEventListener('alpine:init', () => {
    Alpine.data('contactForm', () => ({
        formData: { name: '', email: '', message: '' },
        loading: false,
        success: false,

        async submitForm() {
            this.loading = true;

            // KIỂM TRA MÔI TRƯỜNG:
            // Nếu chạy trên Vercel (Production), dùng endpoint nội bộ /api/contact (Bảo mật)
            // Nếu chạy Local, dùng endpoint từ _sys_config
            const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            const target = isLocal 
                ? (typeof _sys_config !== 'undefined' ? _sys_config.api_endpoint : '') 
                : '/api/contact';

            if (!target && isLocal) {
                console.error("LỖI: Chưa nạp được URL từ config.js ở local!");
                alert("Cấu hình hệ thống chưa sẵn sàng.");
                this.loading = false;
                return;
            }

            try {
                if (isLocal) {
                    // CÁCH GỬI CHO DOCKER LOCAL (Dùng config.js)
                    const p = new URLSearchParams();
                    p.append('name', this.formData.name);
                    p.append('email', this.formData.email);
                    p.append('message', this.formData.message);
                    
                    await fetch(target, { method: 'POST', body: p, mode: 'no-cors' });
                } else {
                    // CÁCH GỬI CHO VERCEL (Bảo mật qua Proxy)
                    const response = await fetch(target, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(this.formData),
                    });
                    
                    if (!response.ok) throw new Error('Network response was not ok');
                }

                this.success = true;
                this.formData = { name: '', email: '', message: '' };
                alert('Cảm ơn bạn! Tin nhắn đã được gửi.');

            } catch (e) {
                console.error(e);
                alert('Đã có lỗi xảy ra khi gửi tin nhắn.');
            } finally {
                this.loading = false;
                setTimeout(() => this.success = false, 5000);
            }
        }
    }));
});
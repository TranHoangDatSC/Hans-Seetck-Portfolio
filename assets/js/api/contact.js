export default async function handler(req, res) {
    // 1. Chỉ cho phép POST
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    // 2. Lấy URL từ biến môi trường (Cấu hình trên Vercel Dashboard)
    const GOOGLE_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_URL) {
        return res.status(500).json({ success: false, message: 'Server configuration missing' });
    }

    try {
        // 3. Chuyển dữ liệu sang Google Apps Script
        const response = await fetch(GOOGLE_URL, {
            method: 'POST',
            // Chuyển object JSON thành format mà Google Script của bạn đang đợi (thường là POST body)
            body: new URLSearchParams(req.body).toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        return res.status(200).json({ success: true, message: 'Message sent!' });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}
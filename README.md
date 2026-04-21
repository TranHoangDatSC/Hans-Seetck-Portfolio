# 🚀 Engineering Portfolio: Backend & AI System Architecture
## Tran Hoang Dat | Technical Documentation v2.0.26

---

## 📑 Tổng quan năng lực (Executive Summary)
Hệ thống hóa năng lực dựa trên nền tảng Kỹ thuật phần mềm tại Đại học Sư phạm TP.HCM (HCMUE). Tập trung chuyên sâu vào kiến trúc Backend, tối ưu hóa quy trình doanh nghiệp (Automation) và nghiên cứu các mô hình học máy phát hiện bất thường.

**Nguyên tắc vận hành:**
- **System Integrity:** Đảm bảo tính toàn vẹn và bảo mật của luồng dữ liệu.
- **Scalability:** Thiết kế hệ thống có khả năng mở rộng dựa trên nhu cầu thực tế.
- **Data-Driven:** Mọi giải pháp đều được kiểm chứng thông qua Benchmarking và số liệu thực tế.

---

## 👤 Thông số định danh (Core Identity)

| Chỉ số | Giá trị |
| :--- | :--- |
| **Họ và tên** | Trần Hoàng Đạt |
| **Chuyên ngành** | Kỹ thuật Phần mềm (Software Engineering) |
| **Trình độ học vấn** | Sinh viên năm 3 - HCMUE |
| **GPA Cumulative** | 3.24/4.00 |
| **Lĩnh vực nghiên cứu** | Backend, Anomaly Detection, AI Agents, MLOps |

---

## 🛠 Khung năng lực kỹ thuật (Technical Stack)

### 1. Ngôn ngữ lập trình & Frameworks
- **Python:** Chuyên sâu **FastAPI** cho kiến trúc microservices. Sử dụng lập trình bất đồng bộ (Async) để tối ưu hóa hiệu suất.
- **C#:** Phát triển các dịch vụ với **ASP.NET Core**, tập trung vào quản lý tài nguyên và định kiểu mạnh.
- **JavaScript/TypeScript:** Tối ưu hóa Google Workspace qua Google Apps Script và phát triển Frontend cơ bản (React/Next.js).
- **PHP:** Xây dựng và duy trì các hệ thống quản trị cơ sở dữ liệu truyền thống.

### 2. Hệ sinh thái Dữ liệu & Cloud
- **Cơ sở dữ liệu:** PostgreSQL (SQLAlchemy), SQL Server, MySQL, MongoDB.
- **Hạ tầng:** Docker, Nginx, Jenkins, Linux (Ubuntu).
- **Cloud:** Làm chủ 11 huy hiệu kỹ năng trên Google Cloud Platform (GCP), tập trung vào quản trị dữ liệu.

### 3. Trí tuệ nhân tạo & Phân tích
- **Học máy:** Triển khai Isolation Forest, Random Forest, XGBoost cho các bài toán phát hiện gian lận (Fraud Detection).
- **Kỹ thuật:** Feature Engineering, xử lý dữ liệu mất cân bằng (Imbalanced Data), Visual Analytics.

## 3 🐳 Quick Start (Local Deployment)
Dự án được container hóa bằng Docker giúp triển khai nhanh chóng mà không cần cài đặt môi trường.

- **Chuẩn bị cấu hình:**
Tạo file `assets/js/config.js` dựa trên template sau:
```javascript
const _sys_config = {
    api_endpoint: "YOUR_GOOGLE_APPS_SCRIPT_URL"

---

## 🔬 Dự án tiêu biểu & Nghiên cứu (Key Projects)

### 🛡️ Hệ thống phát hiện giao dịch bất thường (Anomaly Detection)
* **Mục tiêu:** Nhận diện hành vi gian lận tài chính trên dữ liệu Ví điện tử quy mô lớn.
* **Kỹ thuật:** Tối ưu hóa siêu tham số (Hyperparameter Tuning) để nâng cao độ chính xác (Precision) và độ triệu hồi (Recall).
* **Trạng thái:** Bài báo khoa học đang trong quá trình bình duyệt (Peer Review).

### ⚡ Giải pháp thông báo đa nền tảng (Euréka 2025)
* **Kiến trúc:** Hệ thống trung gian (Middleware) nhận tín hiệu và điều phối dữ liệu qua RESTful API tới Discord, Slack, Telegram.
* **Thành tựu:** * Giải Ba Nghiên cứu khoa học cấp Khoa.
    * Bán kết Giải thưởng Sinh viên NCKH Euréka 2025.
    * Công bố trên **Tạp chí Khoa học và Công nghệ (TNU Journal of Science and Technology)**.

### 🛒 Nền tảng E-commerce "OldShop"
* **Backend:** FastAPI + PostgreSQL + SQLAlchemy (ORM).
* **Tính năng:** Xác thực người dùng, quản lý giỏ hàng, logic tồn kho và xử lý giao dịch.
* **Kết quả:** Đạt điểm đồ án **9.5/10**.

---

## 🎯 Lộ trình phát triển (Career Roadmap)

* **Giai đoạn Foundation (2024 - 2027):** Hoàn thành cử nhân SE, chinh phục chứng chỉ Google Cloud Professional.
* **Giai đoạn Expertise (2027 - 2035):** Thăng tiến Senior Software Engineer, chuyên sâu System Design cho hệ thống chịu tải cao.
* **Giai đoạn Architect (Sau 2035):** **AI Solution Architect**, thiết kế hạ tầng chiến lược kết hợp giữa BI và AI.

---

## 🤝 Liên hệ (Contact)

- **Điện thoại:** 084 300 1753
- **Email:** hoangdattran12@gmail.com
- **LinkedIn:** [linkedin.com/in/trần-đạt-6b4a0a297/](https://www.linkedin.com/in/tr%E1%BA%A7n-%C4%91%E1%BA%A1t-6b4a0a297/)
- **GitHub:** [github.com/TranHoangDatSC](https://github.com/TranHoangDatSC)

---

---

## 🏗️ Kiến trúc dự án (System Architecture)
Dự án Portfolio này được thiết kế theo tư duy tách biệt môi trường (Environment Separation) để đảm bảo tính bảo mật và dễ dàng triển khai:

* **Frontend:** HTML5, Tailwind CSS, Alpine.js (Lightweight Reactivity).
* **Backend:** Google Apps Script (Serverless) xử lý logic nghiệp vụ và lưu trữ dữ liệu tập trung.
* **DevOps:** * **Docker:** Đóng gói môi trường Web Server Nginx đồng nhất.
    * **Docker Compose:** Orchestration luồng dữ liệu và bảo mật cấu hình nhạy cảm thông qua **Volume Mounting**.
    * **Security:** Chặn rò rỉ API Endpoints lên Version Control bằng cách tách biệt file cấu hình qua `.gitignore`.

---

## 🐳 Triển khai nhanh (Quick Start)
Dự án được container hóa giúp triển khai nhanh chóng trên mọi môi trường mà không cần cài đặt thủ công.

### 1. Chuẩn bị cấu hình
Tạo file `assets/js/config.js` tại thư mục gốc (file này đã được chặn bởi `.gitignore`) với nội dung:
```javascript
const _sys_config = {
    api_endpoint: "YOUR_GOOGLE_APPS_SCRIPT_URL"
};
---

**Copyright © 2026 Tran Hoang Dat.**
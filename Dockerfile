# Stage 1: Chỉ dùng để chuẩn bị file
FROM alpine:latest as build
WORKDIR /app
COPY . .
# Ở đây bạn có thể thêm các lệnh build Sass hoặc rút gọn code nếu cần

# Stage 2: Nginx thực tế để chạy
FROM nginx:alpine
COPY --from=build /app /usr/share/nginx/html
RUN touch /usr/share/nginx/html/assets/js/config.js
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
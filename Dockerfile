FROM nginx:1.21.6-alpine
	COPY default.conf /etc/nginx/conf.d/
	RUN rm -rf /usr/share/nginx/*
	ADD dist /usr/share/nginx/app
	RUN chmod 777 -R /usr/share/nginx/app
	CMD ["nginx","-g","daemon off;"]
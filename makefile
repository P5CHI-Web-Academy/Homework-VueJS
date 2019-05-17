up:
	docker-compose up -d

stop:
	docker-compose stop

app:
	docker-compose exec app sh

api:
	docker-compose exec api sh

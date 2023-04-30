build:
	docker-compose build --no-cache --force-rm
up:
	docker-compose up -d 
create-project:
	@make build
	@make up
destroy:
	docker-compose down --rmi all --volumes --remove-orphans
app:
	docker-compose exec app sh
start:
	docker-compose start
stop:
	docker-compose stop
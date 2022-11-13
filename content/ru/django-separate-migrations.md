---
title: "Django Migrations: Делаем миграцию не так как хочет Django"
date: 2022-11-12T15:30:19+03:00
draft: false
tags: ['django', 'migrations', 'database', 'postgres']
---

Django migrations, как и сам django, это просто волшебный инструмент. Но при этом "волшебство" порой мешает сделать 
задачу как нужно. Одно из таких "волшебств", связано с созданием индекса в PostgreSQL без блокировки на запись. 
Подробнее об этом есть в [документацаии](https://www.postgresql.org/docs/current/sql-createindex.html#SQL-CREATEINDEX-CONCURRENTLY).

Стандартный `migrations.AddIndex`, который создается автоматически при добавлении индекса в модель, выполняет обычный 
`CREATE INDEX ...` и если мы хотим выкатить быстренько в прод и не заблочить запись в таблицу, то нужно отделить 
django models state и фактический заапрос в SQL. Для этого есть `migrations.SeparateDatabaseAndState`.

Весь процесс я сделал в [репозиторий](https://github.com/memclutter/example-django-separate-migrations) ниже по шагам (каждый коммит отдельный шаг)

1. В сгенерированном командой makemigrations файле находим `migrations.AddIndex` и переносим в параметр `state_oprations` конструктора `migrations.SeparateDatabaseAndState` [ссылка на коммит](https://github.com/memclutter/example-django-separate-migrations/commit/10f8c74acd184c0b8ecd3958a6c07340b7a1ebdb)
2. В параметре `database_oprations` конструктора `migrations.SeparateDatabaseAndState` добавляем `migrations.RunSQL()` внутри которого добавим `sql` и `reverse_sql`, соответственно запрос выполняемый при "накатке" и "откатке" миграацаии [ссылка на коммит](https://github.com/memclutter/example-django-separate-migrations/commit/4e85b8274bf29688b4ffdda9c5eaaf656517b891)
3. Выключаем выполнение запросаа в транзакции [ссылка на коммит](https://github.com/memclutter/example-django-separate-migrations/commit/6eebcf436f5c040cd52770baa9f8d5b92b3301e7)

После этого можем запускать `migrate` и получится что django будет понимать что индекс в бд и сама бд получит запрос с CONCURRENTLY.  Т.е. мы слегка обманули "волшебство".  

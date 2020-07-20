import csv
import psycopg2
connection = psycopg2.connect(user = "hittegods@hittegods-db",
                                  password = "deterrartatpingvinerikkekanfly1!",
                                  host = "hittegods-db.postgres.database.azure.com",
                                  port = "5432",
                                  database = "postgres")

cursor = connection.cursor()

with open("data.csv", encoding='utf-8') as file:
    spamreader = csv.reader(file, )
    for row in spamreader:
        if row[0] != 'Rutenr':
            cursor.execute("""insert into line (line, description) values (%s,%s)""", (row[0], row[1]))
        connection.commit()
